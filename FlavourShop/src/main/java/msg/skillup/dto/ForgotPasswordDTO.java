package msg.skillup.dto;

import lombok.Data;

@Data
public class ForgotPasswordDTO {
    private String password;
    private String confirmationPassword;
    private Long id;
}
