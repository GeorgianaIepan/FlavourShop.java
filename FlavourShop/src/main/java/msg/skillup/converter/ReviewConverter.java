package msg.skillup.converter;

import msg.skillup.dto.ReviewDTO;
import msg.skillup.model.Review;

import java.util.List;
import java.util.stream.Collectors;

public class ReviewConverter {
    public static ReviewDTO convertFromEntityToDTO(Review review) {
        ReviewDTO reviewDTO = new ReviewDTO();
        reviewDTO.setIdReview(review.getIdReview());
        reviewDTO.setTextReview(review.getTextReview());
        reviewDTO.setRating(review.getRating());
        return reviewDTO;
    }

    public static List<ReviewDTO> convertEntitiesToDTOs(List<Review> reviews) {
        return reviews.stream().map(ReviewConverter::convertFromEntityToDTO).collect(Collectors.toList());
    }
}
