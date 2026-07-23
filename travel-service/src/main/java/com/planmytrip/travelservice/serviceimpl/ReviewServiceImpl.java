package com.planmytrip.travelservice.serviceimpl;

import com.planmytrip.travelservice.entity.Review;
import com.planmytrip.travelservice.repository.ReviewRepository;
import com.planmytrip.travelservice.service.ReviewService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService {

    @Autowired
    private ReviewRepository repository;

    @Override
    public Review addReview(Review review) {
        return repository.save(review);
    }

    @Override
    public List<Review> getAllReviews() {
        return repository.findAll();
    }

    @Override
    public Review getReviewById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Review not found"));
    }

    @Override
    public List<Review> getReviewsByPackageId(Long packageId) {
        return repository.findByPackageId(packageId);
    }

    @Override
    public List<Review> getReviewsByUserId(Long userId) {
        return repository.findByUserId(userId);
    }

    @Override
    public void deleteReview(Long id) {
        repository.deleteById(id);
    }
}