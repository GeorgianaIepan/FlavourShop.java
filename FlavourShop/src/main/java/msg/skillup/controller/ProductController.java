package msg.skillup.controller;

import msg.skillup.dto.OrderDTO;
import msg.skillup.dto.ProductDTO;
import msg.skillup.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
public class ProductController {
    @Autowired
    private ProductService productService;

    @PostMapping("/products/findall")
    public ResponseEntity<List<ProductDTO>> getAll(){
        return ResponseEntity.ok(productService.getAllProducts());
    }
}
