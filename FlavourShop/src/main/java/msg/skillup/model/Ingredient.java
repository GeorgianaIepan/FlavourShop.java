package msg.skillup.model;


import lombok.Data;

import javax.persistence.*;
import java.sql.Blob;

@Entity
@Table(name = "INGREDIENT")
@Data
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_INGREDIENT")
    private Long idIngredient;

    @Column(name = "PRICE_INGREDIENT", nullable = false)
    private Double priceIngredient;

    @Column(name = "NAME_INGREDIENT", nullable = false)
    private String nameIngredient;

    @Column(name = "IMG_INGREDIENT")
    @Lob
    private Blob imgIngredient;

    @Column(name = "ORIGIN_INGREDIENT")
    private String originIngredient;
}
