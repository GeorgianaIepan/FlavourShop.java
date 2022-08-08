package msg.skillup.controller;

import msg.skillup.dto.OrderProductDTO;
import msg.skillup.service.OrderProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderProductController {
    @Autowired
    private OrderProductService orderProductService;
    //e.g /orders/user/10
    @GetMapping("{orderId}/user/{userId}")
    @Transactional
    public ResponseEntity<OrderProductDTO> getAll(@PathVariable Long orderId, @PathVariable Long userId){
        return ResponseEntity.ok( orderProductService.getOrderByUser(orderId, userId));
    }
}
