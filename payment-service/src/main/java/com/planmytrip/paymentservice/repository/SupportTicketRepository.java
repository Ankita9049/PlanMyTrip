package com.planmytrip.paymentservice.repository;


import com.planmytrip.paymentservice.entity.SupportTicket;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SupportTicketRepository extends JpaRepository<SupportTicket, Long> {

    List<SupportTicket> findByUserId(Long userId);
}