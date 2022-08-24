package msg.skillup.controller;

import msg.skillup.configuration.JWTokenCreator;
import msg.skillup.dto.OrderDTO;
import msg.skillup.exception.BusinessException;
import msg.skillup.model.User;
import msg.skillup.service.OrderProductService;
import msg.skillup.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.xml.ws.Response;
import java.util.List;

@RestController
@RequestMapping("/")
public class OrderProductController {
    @Autowired
    private OrderProductService orderProductService;
    //e.g /orders/user/10
    @GetMapping("/orders/{orderId}/user/{userId}")
    @Transactional
    public ResponseEntity<OrderDTO> getByUser(@PathVariable Long orderId, @PathVariable Long userId){
        return ResponseEntity.ok( orderProductService.getOrderByUser(orderId, userId));
    }

    @GetMapping("/orders/user/{userId}")
    @Transactional
    public ResponseEntity<List<OrderDTO>> getAllByUser(@PathVariable Long userId){
        return ResponseEntity.ok( orderProductService.getAllOrdersByUser(userId));
    }

    @Autowired
    private JWTokenCreator jwTokenCreator;

    @Autowired
    private UserService userService;

    @PostMapping("/order")
    public ResponseEntity<String> save(@RequestBody OrderDTO orderDTO, @RequestHeader("Authorization") String token){
        String jwtToken= token.substring(17);
        jwtToken = jwtToken.substring(0,jwtToken.length()-2);
        Long idUser = userService.getUserFromUsername(jwTokenCreator.getUsernameFromToken(jwtToken)).getIdUser();
        orderProductService.saveOrder(orderDTO, idUser);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

