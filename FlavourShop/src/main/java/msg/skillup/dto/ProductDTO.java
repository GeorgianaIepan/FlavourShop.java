package msg.skillup.dto;

import lombok.Data;

import java.sql.Blob;

@Data
public class ProductDTO {
    private Long idProduct;
    private Double priceProduct;
    private String nameProduct;
    private Integer quantity;
}
