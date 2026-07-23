package com.planmytrip.travelservice.controller;

import com.planmytrip.travelservice.entity.TourGuide;
import com.planmytrip.travelservice.service.TourGuideService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/guides")
public class TourGuideController {

    @Autowired
    private TourGuideService service;

    @PostMapping
    public TourGuide createGuide(@RequestBody TourGuide guide) {
        return service.createGuide(guide);
    }

    @GetMapping
    public List<TourGuide> getAllGuides() {
        return service.getAllGuides();
    }

    @GetMapping("/{id}")
    public TourGuide getGuideById(@PathVariable Long id) {
        return service.getGuideById(id);
    }

    @PutMapping("/{id}")
    public TourGuide updateGuide(@PathVariable Long id, @RequestBody TourGuide guide) {
        return service.updateGuide(id, guide);
    }

    @DeleteMapping("/{id}")
    public String deleteGuide(@PathVariable Long id) {
        service.deleteGuide(id);
        return "Guide deleted successfully";
    }
}

