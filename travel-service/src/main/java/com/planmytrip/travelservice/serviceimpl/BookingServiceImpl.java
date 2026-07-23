package com.planmytrip.travelservice.serviceimpl;

import com.planmytrip.travelservice.entity.Booking;
import com.planmytrip.travelservice.repository.BookingRepository;
import com.planmytrip.travelservice.service.BookingService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    private BookingRepository repository;

    @Override
    public Booking createBooking(Booking booking) {
        booking.setStatus("CONFIRMED"); // default status
        return repository.save(booking);
    }

    @Override
    public List<Booking> getAllBookings() {
        return repository.findAll();
    }

    @Override
    public Booking getBookingById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
    }

    @Override
    public List<Booking> getBookingsByUserId(Long userId) {
        return repository.findByUserId(userId);
    }

    @Override
    public List<Booking> getBookingsByPackageId(Long packageId) {
        return repository.findByPackageId(packageId);
    }

    @Override
    public Booking updateBookingStatus(Long id, String status) {
        Booking booking = getBookingById(id);
        booking.setStatus(status);
        return repository.save(booking);
    }

    @Override
    public void deleteBooking(Long id) {
        repository.deleteById(id);
    }
}