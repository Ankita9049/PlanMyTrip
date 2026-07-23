package com.planmytrip.paymentservice.controller;


import com.planmytrip.paymentservice.entity.SupportTicket;
import com.planmytrip.paymentservice.service.SupportTicketService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tickets")
public class SupportTicketController {

    @Autowired
    private SupportTicketService service;

    @PostMapping
    public SupportTicket create(@RequestBody SupportTicket ticket) {
        return service.createTicket(ticket);
    }

    @GetMapping("/user/{userId}")
    public List<SupportTicket> getByUser(@PathVariable Long userId) {
        return service.getTicketsByUser(userId);
    }

    @PutMapping("/resolve/{id}")
    public SupportTicket resolve(@PathVariable Long id) {
        return service.resolveTicket(id);
    }
}
