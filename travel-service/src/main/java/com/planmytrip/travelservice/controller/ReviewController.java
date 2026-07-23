package com.planmytrip.travelservice.controller;

import com.planmytrip.travelservice.entity.Review;
import com.planmytrip.travelservice.service.ReviewService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    @Autowired
    private ReviewService service;

    @PostMapping
    public Review addReview(@RequestBody Review review) {
        return service.addReview(review);
    }

    @GetMapping
    public List<Review> getAllReviews() {
        return service.getAllReviews();
    }

    @GetMapping("/{id}")
    public Review getReviewById(@PathVariable Long id) {
        return service.getReviewById(id);
    }

    @GetMapping("/package/{packageId}")
    public List<Review> getByPackage(@PathVariable Long packageId) {
        return service.getReviewsByPackageId(packageId);
    }

    @GetMapping("/user/{userId}")
    public List<Review> getByUser(@PathVariable Long userId) {
        return service.getReviewsByUserId(userId);
    }

    @DeleteMapping("/{id}")
    public String deleteReview(@PathVariable Long id) {
        service.deleteReview(id);
        return "Review deleted successfully";
    }
}