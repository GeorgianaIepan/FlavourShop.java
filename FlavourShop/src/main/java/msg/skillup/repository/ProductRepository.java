package msg.skillup.repository;

import msg.skillup.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT p FROM Product p WHERE p.nameProduct LIKE  :productName")
    List<Product> findByName(@Param("productName") String productName);

    @Query("SELECT AVG(r.rating) FROM Review r WHERE r.product.idProduct= :productId")
    Integer findRating(@Param("productId") Long productId);

}

