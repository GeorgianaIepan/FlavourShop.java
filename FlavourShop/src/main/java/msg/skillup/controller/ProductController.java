package msg.skillup.controller;

import msg.skillup.dto.ProductDTO;
import msg.skillup.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/products/findall")
    public ResponseEntity<List<ProductDTO>> getAll() {
        return ResponseEntity.ok(productService.getAllProducts());
    }

    @GetMapping("/products/{name}")
    public ResponseEntity<List<ProductDTO>> getProduct(@PathVariable String name){
        return ResponseEntity.ok(productService.getProduct(name));
    }
}
