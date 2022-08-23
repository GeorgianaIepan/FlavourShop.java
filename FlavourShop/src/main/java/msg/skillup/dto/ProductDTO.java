package msg.skillup.dto;

import lombok.Data;

import java.sql.Blob;
import java.util.List;

@Data
public class ProductDTO {
    private Long idProduct;
    private Double priceProduct;
    private String nameProduct;
    private Integer stock;
    private Integer quantity;
    private Double rating;
    private String description;
    private List<IngredientDTO> ingredients;
}
