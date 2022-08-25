package msg.skillup.repository;

import msg.skillup.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.Blob;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}

