package com.planmytrip.bookingservice.Entity;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
public class SupportTicket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ticketId;

    private String issue;
    private String status;

    @ManyToOne
    @JoinColumn(name = "booking_id")
    private Booking booking;
}
