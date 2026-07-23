package com.planmytrip.travelservice.service;

import com.planmytrip.travelservice.entity.TourPackage;
import java.util.List;

public interface TourPackageService {

    TourPackage createPackage(TourPackage tourPackage);

    List<TourPackage> getAllPackages();

    TourPackage getPackageById(Long id);

    TourPackage updatePackage(Long id, TourPackage tourPackage);

    void deletePackage(Long id);

    List<TourPackage> getByLocation(String location);

    List<TourPackage> getByMaxPrice(Double price);

    List<TourPackage> searchByName(String keyword);
}
