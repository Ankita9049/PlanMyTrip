package com.planmytrip.travelservice.service;

import com.planmytrip.travelservice.entity.Booking;
import java.util.List;

public interface BookingService {

    Booking createBooking(Booking booking);

    List<Booking> getAllBookings();

    Booking getBookingById(Long id);

    List<Booking> getBookingsByUserId(Long userId);

    List<Booking> getBookingsByPackageId(Long packageId);

    Booking updateBookingStatus(Long id, String status);

    void deleteBooking(Long id);
}