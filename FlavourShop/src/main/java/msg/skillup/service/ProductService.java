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
        List<ProductDTO> productDTOs = ProductConverter.convertEntitiesToDTOs(products);
        computeRating(productDTOs);
        return productDTOs;
    }

    public ProductDTO getProduct(String productName){
        Product product = productRepository.findByName(productName);
        ProductDTO productDTO = ProductConverter.convertFromEntityToDTO(product);
        productDTO.setRating(computeRating(product));
        return productDTO;
    }

    public Double computeRating(Product product){
        Double rating =  productRepository.findRating(product.getIdProduct());
        if(rating == null)
            rating = 0D;
        return rating;
    }

    public void computeRating(List<ProductDTO> product){
        product.forEach( p-> {
            p.setRating(productRepository.findRating(p.getIdProduct()));
        });
    }
}
