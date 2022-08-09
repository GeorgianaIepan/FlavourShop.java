package msg.skillup.dto;

import lombok.Data;

import java.util.List;

@Data
public class OrderDTO {
    private Long id;
    private String deliveryAddress;
    private Long userId;
    private List<ProductDTO> products;
}

