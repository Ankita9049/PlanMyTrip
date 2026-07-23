package com.planmytrip.travelservice.service;

import com.planmytrip.travelservice.entity.Review;
import java.util.List;

public interface ReviewService {

    Review addReview(Review review);

    List<Review> getAllReviews();

    Review getReviewById(Long id);

    List<Review> getReviewsByPackageId(Long packageId);

    List<Review> getReviewsByUserId(Long userId);

    void deleteReview(Long id);
}