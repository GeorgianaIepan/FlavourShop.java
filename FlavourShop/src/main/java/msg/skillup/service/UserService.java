package msg.skillup.service;

import msg.skillup.converter.OrderConverter;
import msg.skillup.converter.RoleConverter;
import msg.skillup.converter.UserConverter;
import msg.skillup.dto.OrderDTO;
import msg.skillup.dto.UserDTO;
import msg.skillup.model.*;
import msg.skillup.repository.OrderProductRepository;
import msg.skillup.repository.RoleRepository;
import msg.skillup.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User saveUser(UserDTO userDTO){ //userDTO
        User user = UserConverter.convertFromDTOToEntity(userDTO);
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        Role role = roleRepository.getById(userDTO.getRole().getIdRole());
        user.setRole(role);
        User savedUser = userRepository.save(user);
        return savedUser;
    }
}

