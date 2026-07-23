package com.planmytrip.travelservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.planmytrip.travelservice.entity.Booking;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    // 👤 Get bookings by user
    List<Booking> findByUserId(Long userId);

    // 📦 Get bookings by package
    List<Booking> findByPackageId(Long packageId);

    // 📊 Get bookings by status
    List<Booking> findByStatus(String status);
}