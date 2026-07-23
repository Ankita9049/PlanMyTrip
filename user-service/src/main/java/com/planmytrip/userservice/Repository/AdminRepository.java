package com.planmytrip.userservice.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.planmytrip.userservice.Entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {
}
