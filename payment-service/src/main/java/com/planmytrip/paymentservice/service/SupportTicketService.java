package com.planmytrip.paymentservice.service;


import com.planmytrip.paymentservice.entity.SupportTicket;
import java.util.List;

public interface SupportTicketService {

    SupportTicket createTicket(SupportTicket ticket);

    List<SupportTicket> getTicketsByUser(Long userId);

    SupportTicket resolveTicket(Long ticketId);
}