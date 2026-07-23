package com.planmytrip.paymentservice.service;


import com.planmytrip.paymentservice.entity.Payment;
import java.util.List;

public interface PaymentService {

    Payment makePayment(Payment payment);

    List<Payment> getPaymentsByBooking(Long bookingId);

    Payment getPaymentById(Long id);
}
