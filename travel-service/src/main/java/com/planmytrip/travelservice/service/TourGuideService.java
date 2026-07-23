package com.planmytrip.travelservice.service;

import com.planmytrip.travelservice.entity.TourGuide;
import java.util.List;

public interface TourGuideService {

    TourGuide createGuide(TourGuide guide);

    List<TourGuide> getAllGuides();

    TourGuide getGuideById(Long id);

    TourGuide updateGuide(Long id, TourGuide guide);

    void deleteGuide(Long id);
}