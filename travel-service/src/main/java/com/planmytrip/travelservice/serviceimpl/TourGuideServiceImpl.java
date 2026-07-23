package com.planmytrip.travelservice.serviceimpl;

import com.planmytrip.travelservice.entity.TourGuide;
import com.planmytrip.travelservice.repository.TourGuideRepository;
import com.planmytrip.travelservice.service.TourGuideService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TourGuideServiceImpl implements TourGuideService {

    @Autowired
    private TourGuideRepository repository;

    @Override
    public TourGuide createGuide(TourGuide guide) {
        return repository.save(guide);
    }

    @Override
    public List<TourGuide> getAllGuides() {
        return repository.findAll();
    }

    @Override
    public TourGuide getGuideById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Guide not found"));
    }

    @Override
    public TourGuide updateGuide(Long id, TourGuide updatedGuide) {
        TourGuide existing = getGuideById(id);

        existing.setName(updatedGuide.getName());
        existing.setEmail(updatedGuide.getEmail());
        existing.setPhone(updatedGuide.getPhone());
        existing.setExperience(updatedGuide.getExperience());

        return repository.save(existing);
    }

    @Override
    public void deleteGuide(Long id) {
        repository.deleteById(id);
    }
}