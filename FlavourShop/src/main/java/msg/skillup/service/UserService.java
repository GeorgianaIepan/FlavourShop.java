package msg.skillup.service;

import msg.skillup.configuration.JWTokenCreator;
import msg.skillup.converter.UserConverter;
import msg.skillup.dto.UserDTO;
import msg.skillup.exception.BusinessException;
import msg.skillup.model.*;
import msg.skillup.repository.RoleRepository;
import msg.skillup.repository.UserRepository;
import msg.skillup.validator.UserValidator;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.Transport;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private UserValidator userValidator;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JWTokenCreator jwTokenCreator;

    @Autowired
    private JavaMailSender mailSender;

    public User saveUser(UserDTO userDTO)
            throws BusinessException, UnsupportedEncodingException, MessagingException {
        User user = UserConverter.convertFromDTOToEntity(userDTO);
        UserValidator.errorList.clear();
        userValidator.validate(user);
        if(UserValidator.errorList.isEmpty()){
            Role role = roleRepository.getById(2);
            user.setRole(role);
            String randomCode = RandomString.make(64);
            user.setVerificationCode(randomCode);
            user.setEnabled(false);
            User savedUser = userRepository.save(user);
            sendVerificationEmail(user);
            return savedUser;
        }
        else{
            throw new BusinessException(UserValidator.errorList.toString());
        }
    }

    private void sendVerificationEmail(User user)
            throws MessagingException, UnsupportedEncodingException {
        String toAddress = user.getEmail();
        String fromAddress = "flavourshopskillup@outlook.com";
        String senderName = "FlavourShop";
        String subject = "Please verify your registration";
        String content = "Dear [[name]],<br>"
                + "Please click the link below to verify your registration:<br>"
                + "<h3><a href=\"[[URL]]\" target=\"_self\">VERIFY</a></h3>"
                + "Thank you,<br>"
                + "FlavourShop.";

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom(fromAddress, senderName);
        helper.setTo(toAddress);
        helper.setSubject(subject);

        content = content.replace("[[name]]", user.getName());
        String verifyURL = "http:/localhost:4200" + "/email-confirmation?code=" + user.getVerificationCode();

        content = content.replace("[[URL]]", verifyURL);

        helper.setText(content, true);

        mailSender.send(message);
        System.out.printf("email send");
    }

    public boolean verify(String verificationCode) {
        User user = userRepository.findByVerificationCode(verificationCode);

        if (user == null || user.isEnabled()) {
            return false;
        } else {
            user.setVerificationCode(null);
            user.setEnabled(true);
            userRepository.save(user);
            return true;
        }

    }

    public String matchUser(String username, String password) throws BusinessException {
        User user = userRepository.matchUser(username);

        if(user == null){
            throw new BusinessException("Userul nu a fost gasit");
        }
        else if(!passwordEncoder.matches(password, user.getPassword())) {
            throw new BusinessException("Parola incorecta");
        }
        else if(!user.isEnabled()){
            throw new BusinessException("emailul nu a fost verificat!");
        }
        String token = jwTokenCreator.generateToken(user);
        return token;
    }

//    public User getUserFromUsername(String username){
//        return userRepository.matchUser(username);
//    }

}

