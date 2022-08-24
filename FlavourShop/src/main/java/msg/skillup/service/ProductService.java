package msg.skillup.service;

import msg.skillup.converter.ProductConverter;
import msg.skillup.dto.ProductDTO;
import msg.skillup.model.Product;
import msg.skillup.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<ProductDTO> getAllProducts() {
        List<Product> products = productRepository.findAll();
        return ProductConverter.convertEntitiesToDTOs(products);
    }

    public ProductDTO getProduct(String productName){
        Product product = productRepository.findByName(productName);
        return ProductConverter.convertFromEntityToDTO(product);
    }
}
