package msg.skillup.dto;

import lombok.Data;
import msg.skillup.model.Role;

import javax.persistence.*;

@Data
public class UserDTO {
    private Long idUser;
    private String username;
    private String name;
    private String password;
    private String email;
    private String phoneNumber;
    private RoleDTO role;
}

