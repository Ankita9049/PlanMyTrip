package com.planmytrip.userservice.service;

import java.util.List;

public interface PackageService {

    Package addPackage(Package pkg);   // Admin

    List<Package> getAllPackages();    // User explore

    Package getPackageById(Long id);

    List<Package> getByLocation(String location);

}