package com.planmytrip.travelservice.controller;

import com.planmytrip.travelservice.entity.Booking;
import com.planmytrip.travelservice.service.BookingService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    private BookingService service;

    @PostMapping
    public Booking createBooking(@RequestBody Booking booking) {
        return service.createBooking(booking);
    }

    @GetMapping
    public List<Booking> getAllBookings() {
        return service.getAllBookings();
    }

    @GetMapping("/{id}")
    public Booking getBookingById(@PathVariable Long id) {
        return service.getBookingById(id);
    }

    @GetMapping("/user/{userId}")
    public List<Booking> getByUser(@PathVariable Long userId) {
        return service.getBookingsByUserId(userId);
    }

    @GetMapping("/package/{packageId}")
    public List<Booking> getByPackage(@PathVariable Long packageId) {
        return service.getBookingsByPackageId(packageId);
    }

    @PutMapping("/{id}/status")
    public Booking updateStatus(@PathVariable Long id, @RequestParam String status) {
        return service.updateBookingStatus(id, status);
    }

    @DeleteMapping("/{id}")
    public String deleteBooking(@PathVariable Long id) {
        service.deleteBooking(id);
        return "Booking deleted successfully";
    }
}