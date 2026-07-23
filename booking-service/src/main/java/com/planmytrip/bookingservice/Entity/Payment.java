package com.planmytrip.bookingservice.Entity;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long paymentId;

    private Double amount;
    private String status;

    @OneToOne
    @JoinColumn(name = "booking_id")
    private Booking booking;
}
