package msg.skillup.service;

import msg.skillup.converter.OrderConverter;
import msg.skillup.converter.ProductConverter;
import msg.skillup.dto.OrderDTO;
import msg.skillup.dto.ProductDTO;
import msg.skillup.model.Order;
import msg.skillup.model.OrderProduct;
import msg.skillup.model.Product;
import msg.skillup.model.User;
import msg.skillup.repository.OrderProductRepository;
import msg.skillup.repository.OrderRepository;
import msg.skillup.repository.ProductRepository;
import msg.skillup.repository.UserRepository;
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

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    public OrderDTO getOrderByUser(Long orderId, Long userId){
        List<OrderProduct> orders = orderProductRepository.findAllByUserAndOrder(orderId, userId);
        List<ProductDTO> products = new ArrayList<>();
        orders.forEach(el -> {
            ProductDTO productDTO = ProductConverter.convertFromEntityToDTO(el.getProduct());
            productDTO.setQuantity(el.getQuantity());
            products.add(productDTO);
        });
        OrderDTO orderDTO = new OrderDTO();
        if(!orders.isEmpty()){
            orderDTO = OrderConverter.convertFromEntityToDTO(orders.get(0));
            orderDTO.setProducts(products);
        }

        return orderDTO;
    }

    public List<OrderDTO> getAllOrdersByUser(Long userId){
        List<OrderProduct> orders = orderProductRepository.findAllByUser(userId);
        Map<Long, List<OrderProduct>> orderMap = orders.stream().collect(groupingBy(e->e.getOrder().getIdOrder(), toList()));
        List<OrderDTO> ordersResult = new ArrayList<>();
        OrderDTO order;
        for(Long orderId: orderMap.keySet()){
            List<ProductDTO> products = new ArrayList<>();
            orderMap.get(orderId).forEach(el -> {
                ProductDTO productDTO = ProductConverter.convertFromEntityToDTO(el.getProduct());
                productDTO.setQuantity(el.getQuantity());
                products.add(productDTO);
            });
            order = OrderConverter.convertFromEntityToDTO(orderMap.get(orderId).get(0));
            order.setProducts(products);
            ordersResult.add(order);
        }
        return ordersResult;
    }

    public void saveOrder(OrderDTO orderDTO){
        User user = userRepository.getById(orderDTO.getUserId());
        Order order = OrderConverter.convertFromDTOToEntity(orderDTO);
        order.setUser(user);
        Order savedOrder = orderRepository.save(order);
        orderDTO.getProducts().forEach(p -> {
            Product product = productRepository.getById(p.getIdProduct());
            OrderProduct orderProduct = new OrderProduct();
            orderProduct.setOrder(savedOrder);
            orderProduct.setProduct(product);
            orderProduct.setQuantity(p.getQuantity());
            OrderProduct savedOrderProduct = orderProductRepository.save(orderProduct);
        });


    }
}