package com.planmytrip.userservice.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.planmytrip.userservice.Entity.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
