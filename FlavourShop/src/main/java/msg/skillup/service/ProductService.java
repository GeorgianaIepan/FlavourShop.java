package msg.skillup.service;

import msg.skillup.converter.ProductConverter;
import msg.skillup.dto.ProductDTO;
import msg.skillup.model.Product;
import msg.skillup.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

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

    public ProductDTO getProduct(String productName) throws SQLException {
        Product product = productRepository.findByName(productName);
        ProductDTO productDTO = ProductConverter.convertFromEntityToDTO(product);
        productDTO.setRating(computeRating(product));
        return productDTO;
    }

    public Integer computeRating(Product product){
        Integer rating =  productRepository.findRating(product.getIdProduct());
        if(rating == null)
            rating = 0;
        return rating;
    }

    public void computeRating(List<ProductDTO> product){
        product.forEach( p-> {
            p.setRating(productRepository.findRating(p.getIdProduct()));
        });
    }


    public byte[] getImage(Long id) throws SQLException {

        Blob productImg = productRepository.getById(id).getImgProduct();
        if (productImg == null) {
            return new byte[0];
        }
        int blobLength = (int) productImg.length();
        byte[] blobAsBytes = productImg.getBytes(1, blobLength);
        return blobAsBytes;

    }


    public Product saveProductImage(Product product, Blob file) throws SQLException {
        product.setImgProduct(file);
        productRepository.save(product);
        return product;
    }

    public void delete(Long id) {
        productRepository.deleteById(id);
    }


}
