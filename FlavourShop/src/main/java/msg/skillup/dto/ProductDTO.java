package msg.skillup.dto;

import lombok.Data;

import java.util.List;

@Data
public class ProductDTO {
    private Long idProduct;
    private Double priceProduct;
    private String nameProduct;
    private Integer stock;
    private Integer quantityProduct;
    private Double rating;
    private String description;
    private List<IngredientDTO> ingredients;
}
