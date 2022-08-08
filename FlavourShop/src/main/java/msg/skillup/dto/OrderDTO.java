package msg.skillup.dto;

import lombok.Data;

import java.util.List;

@Data
public class OrderDTO {
    private Long id;
    private String deliveryAddress;
    private List<ProductDTO> products;
}
