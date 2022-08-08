package msg.skillup.controller;

import msg.skillup.dto.OrderDTO;
import msg.skillup.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {
    @Autowired
    private OrderService orderService;
    //e.g /orders/user/10
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<OrderDTO>> getAll(@PathVariable Long userId){
        List<OrderDTO> orderDTOs = orderService.getAllOrderByUser(userId);
        return ResponseEntity.ok().body(orderDTOs);
    }
}
