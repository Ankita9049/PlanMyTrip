package com.planmytrip.bookingservice.Entity;



import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.*;
import lombok.*;

@Entity
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;

    private Long userId;     // from User Service
    private Long packageId;  // from Package Service
    private Long guideId;    // optional

    private String bookingDate;
    private String status;
    @OneToOne(mappedBy = "booking", cascade = CascadeType.ALL)
    private Payment payment;

    @OneToMany(mappedBy = "booking", cascade = CascadeType.ALL)
    private List<SupportTicket> tickets;

}