package msg.skillup.dto;

import lombok.Data;
import msg.skillup.model.Product;

import java.util.List;

@Data
public class OrderProductDTO {
    private Long id;
    private String deliveryAddress;
    private List<ProductDTO> products;
}
