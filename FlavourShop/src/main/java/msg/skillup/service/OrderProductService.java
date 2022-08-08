package msg.skillup.service;

import msg.skillup.converter.OrderConverter;
import msg.skillup.converter.ProductConverter;
import msg.skillup.dto.OrderDTO;
import msg.skillup.model.OrderProduct;
import msg.skillup.model.Product;
import msg.skillup.repository.OrderProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static java.util.stream.Collectors.*;

@Service
public class OrderProductService {
    @Autowired
    private OrderProductRepository orderProductRepository;

    public OrderDTO getOrderByUser(Long orderId, Long userId){
        List<OrderProduct> orders = orderProductRepository.findAllByUserAndOrder(orderId, userId);
        List<Product> products = new ArrayList<>();
        orders.forEach(el -> products.add(el.getProduct()));
        OrderDTO orderDTO = new OrderDTO();
        if(!orders.isEmpty()){
            orderDTO = OrderConverter.convertFromEntityToDTO(orders.get(0));
            orderDTO.setProducts(ProductConverter.convertEntitiesToDTOs(products));
        }

        return orderDTO;
    }

    public List<OrderDTO> getAllOrdersByUser(Long userId){
        List<OrderProduct> orders = orderProductRepository.findAllByUser(userId);
        Map<Long, List<OrderProduct>> orderMap = orders.stream().collect(groupingBy(e->e.getOrder().getIdOrder(), toList()));
        List<OrderDTO> ordersResult = new ArrayList<>();
        OrderDTO order;
        for(Long orderId: orderMap.keySet()){
            List<Product> products = new ArrayList<>();
            orderMap.get(orderId).forEach(el -> products.add(el.getProduct()));
            order = OrderConverter.convertFromEntityToDTO(orderMap.get(orderId).get(0));
            order.setProducts(ProductConverter.convertEntitiesToDTOs(products));
            ordersResult.add(order);
        }
        return ordersResult;
    }
}
