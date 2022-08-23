package msg.skillup.dto;

import lombok.Data;

@Data
public class ProductDTO {
    private Long idProduct;
    private Double priceProduct;
    private String nameProduct;
    private Integer quantity;
    private Double rating;
    private String description;
}

