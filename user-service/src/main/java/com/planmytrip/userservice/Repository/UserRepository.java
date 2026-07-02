package com.planmytrip.userservice.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.planmytrip.userservice.Entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
}