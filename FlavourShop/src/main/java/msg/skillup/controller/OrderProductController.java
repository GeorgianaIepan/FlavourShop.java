package msg.skillup.controller;

import msg.skillup.dto.OrderDTO;
import msg.skillup.service.OrderProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/order")
    public void save(@RequestBody OrderDTO orderDTO){
        orderProductService.saveOrder(orderDTO);
        ResponseEntity.ok();
    }
}
