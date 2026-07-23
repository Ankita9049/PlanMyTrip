package com.planmytrip.travelservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.planmytrip.travelservice.entity.Review;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    // ⭐ Get reviews by package
    List<Review> findByPackageId(Long packageId);

    // 👤 Get reviews by user
    List<Review> findByUserId(Long userId);
}
