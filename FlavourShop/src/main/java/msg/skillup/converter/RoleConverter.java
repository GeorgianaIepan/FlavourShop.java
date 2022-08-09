package msg.skillup.converter;

import msg.skillup.dto.RoleDTO;
import msg.skillup.dto.UserDTO;
import msg.skillup.model.Role;
import msg.skillup.model.User;

public class RoleConverter {

    public static Role convertFromDTOToEntity(RoleDTO roleDTO){
        Role role = new Role();
        role.setIdRole(roleDTO.getIdRole());
        role.setNameRole(roleDTO.getName());
        return role;
    }
}
