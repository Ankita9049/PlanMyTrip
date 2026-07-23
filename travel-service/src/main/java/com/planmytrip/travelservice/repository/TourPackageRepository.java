package com.planmytrip.travelservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.planmytrip.travelservice.entity.TourPackage;

import java.util.List;

public interface TourPackageRepository extends JpaRepository<TourPackage, Long> {

    // 🔍 Search by location
    List<TourPackage> findByDestination(String location);

    // 🔍 Search by price less than
    List<TourPackage> findByPriceLessThanEqual(Double price);

    // 🔍 Search by name containing keyword
    List<TourPackage> findByTitleContainingIgnoreCase(String keyword);
}