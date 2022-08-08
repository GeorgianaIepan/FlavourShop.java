package msg.skillup.converter;

import msg.skillup.dto.OrderDTO;
import msg.skillup.model.Order;

import java.util.List;
import java.util.stream.Collectors;

public class OrderConverter {
    public static OrderDTO convertFromEntityToDTO(Order order){
        OrderDTO orderDTO = new OrderDTO();
        orderDTO.setId(order.getIdOrder());
        orderDTO.setDeliveryAddress(order.getAddress());
        return orderDTO;
    }

    public static List<OrderDTO> convertEntitiesToDTOs(List<Order> orders){
        return orders.stream().map(OrderConverter::convertFromEntityToDTO).collect(Collectors.toList());
    }
}
