package msg.skillup.service;

import msg.skillup.converter.OrderConverter;
import msg.skillup.dto.OrderDTO;
import msg.skillup.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public List<OrderDTO> getAllOrderByUser(Long userId){
        return OrderConverter.convertEntitiesToDTOs(orderRepository.findAllByUser(userId));
    }
}
