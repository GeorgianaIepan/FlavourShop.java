package msg.skillup.converter;

import msg.skillup.dto.ProductDTO;
import msg.skillup.model.Product;
import msg.skillup.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.stream.Collectors;

public class ProductConverter {

    public static ProductDTO convertFromEntityToDTO(Product product) {
        ProductDTO productDTO = new ProductDTO();
        productDTO.setIdProduct(product.getIdProduct());
        productDTO.setNameProduct(product.getNameProduct());
        productDTO.setPriceProduct(product.getPriceProduct());
        productDTO.setDescription(product.getDescription());
        return productDTO;
    }

    public static List<ProductDTO> convertEntitiesToDTOs(List<Product> products) {
        return products.stream().map(ProductConverter::convertFromEntityToDTO).collect(Collectors.toList());
    }

//    public static ProductDTO convertEntityToDTO(List<Product> products){
//        return (ProductDTO) products.stream().map(ProductConverter::convertFromEntityToDTO);
//    }
}

