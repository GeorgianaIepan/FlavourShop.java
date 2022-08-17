package msg.skillup.controller;

import java.util.List;

import msg.skillup.dto.OrderDTO;
import msg.skillup.dto.UserDTO;
import msg.skillup.exception.BusinessException;
import msg.skillup.model.User;
import msg.skillup.repository.UserRepository;
import msg.skillup.repository.UserRepository;
import msg.skillup.service.OrderProductService;
import msg.skillup.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;

@RestController
@RequestMapping("/")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/user")
    public void save(@RequestBody @Valid UserDTO userDTO){
        try{
            userService.saveUser(userDTO);
            ResponseEntity.ok();
        } catch(BusinessException businessException){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, businessException.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody UserDTO userDTO){
        try{
            String token = userService.matchUser(userDTO.getUsername(), userDTO.getPassword());
            return ResponseEntity.ok(token);
        } catch(BusinessException businessException){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, businessException.getMessage());
        }
    }

   /* @GetMapping("/findall")
    public ResponseEntity<List<User>> findAll() {
        try {
            return new ResponseEntity<>(userService.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }*/
}
