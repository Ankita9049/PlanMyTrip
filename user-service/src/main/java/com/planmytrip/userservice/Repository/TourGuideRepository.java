package com.planmytrip.userservice.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.planmytrip.userservice.Entity.TourGuide;

public interface TourGuideRepository extends JpaRepository<TourGuide, Long> {
}
