package msg.skillup.validator;

import msg.skillup.exception.BusinessException;
import msg.skillup.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.List;
@Component
public class UserValidator implements Validator<User>{
    private static final String regexPassword = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$";
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public List<String> validate(User user) {
        if(user.getPassword().matches(regexPassword))
        {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
        }
        else {
            errorList.add("password must contain minimum eight characters, at least one uppercase letter, one lowercase letter and one number:");
        }
        return errorList;
    }
}
