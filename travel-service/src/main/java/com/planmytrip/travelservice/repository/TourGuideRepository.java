package com.planmytrip.travelservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.planmytrip.travelservice.entity.TourGuide;

import java.util.List;

public interface TourGuideRepository extends JpaRepository<TourGuide, Long> {

    // ✅ Get available guides
    List<TourGuide> findByAvailableTrue();

    // 🔍 Find by location
    List<TourGuide> findByLocation(String location);

    // 🔍 Sort by rating
    List<TourGuide> findAllByOrderByRatingDesc();
}
