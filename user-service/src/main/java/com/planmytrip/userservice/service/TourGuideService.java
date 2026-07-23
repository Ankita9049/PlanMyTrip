package com.planmytrip.userservice.service;

import java.util.List;

import com.planmytrip.userservice.Entity.TourGuide;

public interface TourGuideService {

    TourGuide addGuide(TourGuide guide);

    List<TourGuide> getAllGuides();

    List<TourGuide> filterGuides(double minRating, double maxPrice);

    TourGuide getGuideById(Long id);

    void updateAvailability(Long guideId, boolean status);

}
