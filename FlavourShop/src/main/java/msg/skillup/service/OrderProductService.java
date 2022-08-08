package msg.skillup.service;

import msg.skillup.converter.OrderProductConverter;
import msg.skillup.converter.ProductConverter;
import msg.skillup.dto.OrderProductDTO;
import msg.skillup.model.OrderProduct;
import msg.skillup.model.Product;
import msg.skillup.repository.OrderProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderProductService {
    @Autowired
    private OrderProductRepository orderProductRepository;

    public OrderProductDTO getOrderByUser(Long orderId, Long userId){
        List<OrderProduct> orders = orderProductRepository.findAllByUser(orderId, userId);
        List<Product> products = new ArrayList<>();
        orders.forEach(el -> products.add(el.getProduct()));
        OrderProductDTO orderProductDTO = new OrderProductDTO();
        if(!orders.isEmpty()){
            orderProductDTO = OrderProductConverter.convertFromEntityToDTO(orders.get(0));
            orderProductDTO.setProducts(ProductConverter.convertEntitiesToDTOs(products));
        }

        return orderProductDTO;
    }
}
