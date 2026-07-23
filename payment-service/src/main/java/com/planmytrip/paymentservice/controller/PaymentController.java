package com.planmytrip.paymentservice.controller;


import com.planmytrip.paymentservice.entity.Payment;
import com.planmytrip.paymentservice.service.PaymentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {

    @Autowired
    private PaymentService service;

    @PostMapping
    public Payment makePayment(@RequestBody Payment payment) {
        return service.makePayment(payment);
    }

    @GetMapping("/booking/{bookingId}")
    public List<Payment> getByBooking(@PathVariable Long bookingId) {
        return service.getPaymentsByBooking(bookingId);
    }

    @GetMapping("/{id}")
    public Payment getById(@PathVariable Long id) {
        return service.getPaymentById(id);
    }
}
