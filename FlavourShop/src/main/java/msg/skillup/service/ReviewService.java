package msg.skillup.service;

import msg.skillup.dto.ReviewDTO;
import msg.skillup.model.Review;
import msg.skillup.converter.ReviewConverter;
import msg.skillup.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    public List<ReviewDTO> getAllReviewsByProduct(Long productId) {
        List<Review> reviews = reviewRepository.findAllByProduct(productId);
        return ReviewConverter.convertEntitiesToDTOs(reviews);
    }
}
