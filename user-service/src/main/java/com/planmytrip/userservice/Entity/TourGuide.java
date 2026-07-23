package com.planmytrip.userservice.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TourGuide {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long guideId;

    private String name;
    private String email;
    private String phone;
    private String experience;

    @ManyToOne
    @JoinColumn(name = "admin_id")
    private Admin admin;
}
