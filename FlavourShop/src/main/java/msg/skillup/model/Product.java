package msg.skillup.model;

import lombok.Data;
import javax.persistence.*;
import java.sql.Blob;

@Entity
@Table(name = "PRODUCT")
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_PRODUCT")
    private Long idProduct;

    @Column(name = "PRICE_PRODUCT", nullable = false)
    private Double priceProduct;

    @Column(name = "NAME_PRODUCT", nullable = false)
    private String nameProduct;

    @Column(name = "STOCK_PRODUCT", nullable = false)
    private Integer stockProduct;

    @Column(name = "DESCRIPTION", nullable = false)
    private String description;

    @Column(name = "IMG_PRODUCT")
    @Lob
    private Blob imgProduct;
}

