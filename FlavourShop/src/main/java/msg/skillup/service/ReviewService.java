package msg.skillup.service;

import msg.skillup.converter.ReviewConverter;
import msg.skillup.dto.ReviewDTO;
import msg.skillup.model.Review;
import msg.skillup.repository.ReviewRepository;
import msg.skillup.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private UserRepository userRepository;

    public List<ReviewDTO> getAllReviewsByProduct(Long productId) {
        List<Review> reviews = reviewRepository.findAllByProduct(productId);
        return ReviewConverter.convertEntitiesToDTOs(reviews);
    }

    public void addReview(ReviewDTO reviewDTO, Long idUser){
        Review review = ReviewConverter.convertFromDTOToEntity(reviewDTO);
        review.setUser(userRepository.getById(idUser));
        reviewRepository.save(review);
    }


}
