package com.planmytrip.paymentservice.serviceimpl;


import com.planmytrip.paymentservice.entity.SupportTicket;
import com.planmytrip.paymentservice.repository.SupportTicketRepository;
import com.planmytrip.paymentservice.service.SupportTicketService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class SupportTicketServiceImpl implements SupportTicketService {

    @Autowired
    private SupportTicketRepository repository;

    @Override
    public SupportTicket createTicket(SupportTicket ticket) {
        ticket.setStatus("OPEN");
        ticket.setCreatedAt(LocalDateTime.now());
        return repository.save(ticket);
    }

    @Override
    public List<SupportTicket> getTicketsByUser(Long userId) {
        return repository.findByUserId(userId);
    }

    @Override
    public SupportTicket resolveTicket(Long ticketId) {
        SupportTicket ticket = repository.findById(ticketId)
                .orElseThrow(() -> new RuntimeException("Ticket not found"));

        ticket.setStatus("RESOLVED");
        return repository.save(ticket);
    }
}
