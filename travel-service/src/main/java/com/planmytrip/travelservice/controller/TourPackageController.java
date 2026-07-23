package com.planmytrip.travelservice.controller;

import com.planmytrip.travelservice.entity.TourPackage;
import com.planmytrip.travelservice.service.TourPackageService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/packages")
public class TourPackageController {

    @Autowired
    private TourPackageService service;

    @PostMapping
    public TourPackage createPackage(@RequestBody TourPackage tourPackage) {
        return service.createPackage(tourPackage);
    }

    @GetMapping
    public List<TourPackage> getAllPackages() {
        return service.getAllPackages();
    }

    @GetMapping("/{id}")
    public TourPackage getPackageById(@PathVariable Long id) {
        return service.getPackageById(id);
    }

    @PutMapping("/{id}")
    public TourPackage updatePackage(@PathVariable Long id, @RequestBody TourPackage tourPackage) {
        return service.updatePackage(id, tourPackage);
    }

    @DeleteMapping("/{id}")
    public String deletePackage(@PathVariable Long id) {
        service.deletePackage(id);
        return "Package deleted successfully";
    }

    @GetMapping("/destination/{destination}")
    public List<TourPackage> getByDestination(@PathVariable String destination) {
        return service.getByLocation(destination);
    }

    @GetMapping("/price/{price}")
    public List<TourPackage> getByPrice(@PathVariable Double price) {
        return service.getByMaxPrice(price);
    }

    @GetMapping("/search/{keyword}")
    public List<TourPackage> search(@PathVariable String keyword) {
        return service.searchByName(keyword);
    }
}