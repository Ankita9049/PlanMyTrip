package com.planmytrip.userservice.Entity;


import java.util.List;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long adminId;

    private String name;
    private String email;
    private String password;

    // 🔗 Relation
    @OneToMany(mappedBy = "admin")
    private List<TourGuide> guides;
}
