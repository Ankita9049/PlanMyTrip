package com.planmytrip.travelservice.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;
    
    // 🔗 References (NO object mapping)
    private Long userId;      // from user-service
    private Long packageId;   // from TourPackage
    private Long guideId;     // from TourGuide

    private LocalDate bookingDate;

    private String status; // BOOKED / CANCELLED / COMPLETED
}
