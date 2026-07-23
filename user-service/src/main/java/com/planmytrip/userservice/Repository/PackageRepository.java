package com.planmytrip.userservice.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.planmytrip.userservice.Entity.TourPackage;

public interface PackageRepository extends JpaRepository<TourPackage, Long> {
}
