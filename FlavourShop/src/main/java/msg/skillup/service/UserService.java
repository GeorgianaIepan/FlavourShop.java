package msg.skillup.service;

import msg.skillup.configuration.JWTokenCreator;
import msg.skillup.converter.UserConverter;
import msg.skillup.dto.UserDTO;
import msg.skillup.exception.BusinessException;
import msg.skillup.model.*;
import msg.skillup.repository.RoleRepository;
import msg.skillup.repository.UserRepository;
import msg.skillup.validator.UserValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

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

    public User saveUser(UserDTO userDTO) throws BusinessException { //userDTO
        User user = UserConverter.convertFromDTOToEntity(userDTO);
        UserValidator.errorList.clear();
        userValidator.validate(user);
        if(UserValidator.errorList.isEmpty()){
            Role role = roleRepository.getById(2);
            user.setRole(role);
            User savedUser = userRepository.save(user);
            return savedUser;
        }
        else{
            throw new BusinessException(UserValidator.errorList.toString());
        }
    }

    public String matchUser(String username, String password) throws BusinessException {
        User user = userRepository.matchUser(username);
        String token = jwTokenCreator.generateToken(user);
        if(user == null){
            throw new BusinessException("Userul nu a fost gasit");
        }
        else if(!passwordEncoder.matches(password, user.getPassword())){
            throw new BusinessException("Parola incorecta");
        }
        return token;
    }
}

