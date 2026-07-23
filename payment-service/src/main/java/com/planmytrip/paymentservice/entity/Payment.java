package com.planmytrip.paymentservice.entity;

import java.time.LocalDateTime;

import com.planmytrip.paymentservice.enums.PaymentStatus;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Payment {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    private Long bookingId;
	    private Double amount;

	    private PaymentStatus status; // SUCCESS / FAILED

	    private LocalDateTime paymentDate;
}
