package msg.skillup.controller;

import msg.skillup.dto.ReviewDTO;
import msg.skillup.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.transaction.Transactional;
import java.util.List;

@RestController
@RequestMapping("/")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @GetMapping("/reviews/product/{productId}")
    @Transactional
    public ResponseEntity<List<ReviewDTO>> getAllByProduct(@PathVariable Long productId) {
        return ResponseEntity.ok(reviewService.getAllReviewsByProduct(productId));
    }

}
