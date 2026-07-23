package com.planmytrip.paymentservice.serviceimpl;


import com.planmytrip.paymentservice.entity.Payment;
import com.planmytrip.paymentservice.enums.PaymentStatus;
import com.planmytrip.paymentservice.repository.PaymentRepository;
import com.planmytrip.paymentservice.service.PaymentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    private PaymentRepository repository;

    @Override
    public Payment makePayment(Payment payment) {

        payment.setPaymentDate(LocalDateTime.now());

        // Simulate payment
        if (Math.random() > 0.2) {
            payment.setStatus(PaymentStatus.SUCCESS);   // ✅
        } else {
            payment.setStatus(PaymentStatus.FAILED);    // ✅
        }

        return repository.save(payment);
    }

    @Override
    public List<Payment> getPaymentsByBooking(Long bookingId) {
        return repository.findByBookingId(bookingId);
    }

    @Override
    public Payment getPaymentById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Payment not found"));
    }
}
