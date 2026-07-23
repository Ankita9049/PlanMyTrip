package com.planmytrip.travelservice.serviceimpl;

import com.planmytrip.travelservice.entity.TourPackage;
import com.planmytrip.travelservice.repository.TourPackageRepository;
import com.planmytrip.travelservice.service.TourPackageService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TourPackageServiceImpl implements TourPackageService {

    @Autowired
    private TourPackageRepository repository;

    @Override
    public TourPackage createPackage(TourPackage tourPackage) {
        return repository.save(tourPackage);
    }

    @Override
    public List<TourPackage> getAllPackages() {
        return repository.findAll();
    }

    @Override
    public TourPackage getPackageById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Package not found"));
    }

    @Override
    public TourPackage updatePackage(Long id, TourPackage updatedPackage) {
        TourPackage existing = getPackageById(id);

        existing.setTitle(updatedPackage.getTitle());
        existing.setDescription(updatedPackage.getDescription());
        existing.setPrice(updatedPackage.getPrice());
        existing.setDestination(updatedPackage.getDestination());
        existing.setDurationDays(updatedPackage.getDurationDays());
        existing.setGuideId(updatedPackage.getGuideId());

        return repository.save(existing);
    }

    @Override
    public void deletePackage(Long id) {
        repository.deleteById(id);
    }

    @Override
    public List<TourPackage> getByLocation(String location) {
        return repository.findByDestination(location);
    }

    @Override
    public List<TourPackage> getByMaxPrice(Double price) {
        return repository.findByPriceLessThanEqual(price);
    }

    @Override
    public List<TourPackage> searchByName(String keyword) {
        return repository.findByTitleContainingIgnoreCase(keyword);
    }
}