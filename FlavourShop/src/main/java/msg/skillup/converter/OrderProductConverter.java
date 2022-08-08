package msg.skillup.converter;

import msg.skillup.dto.OrderProductDTO;
import msg.skillup.model.Order;
import msg.skillup.model.OrderProduct;
import msg.skillup.model.Product;

import java.util.List;
import java.util.stream.Collectors;

public class OrderProductConverter {
    public static OrderProductDTO convertFromEntityToDTO(OrderProduct orderProduct){
        OrderProductDTO orderProductDTO = new OrderProductDTO();
        orderProductDTO.setId(orderProduct.getOrder().getIdOrder());
        orderProductDTO.setDeliveryAddress(orderProduct.getOrder().getAddress());
        return orderProductDTO;
    }
    public static List<OrderProductDTO> convertEntitiesToDTOs(List<OrderProduct> orders){
        return orders.stream().map(OrderProductConverter::convertFromEntityToDTO).collect(Collectors.toList());
    }

}
