package msg.skillup.repository;

import msg.skillup.model.Product;
import msg.skillup.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT p FROM Product p WHERE p.nameProduct= :productName")
    Product findByName(@Param("productName") String productName);

}

