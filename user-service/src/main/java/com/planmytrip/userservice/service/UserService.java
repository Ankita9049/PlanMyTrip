package com.planmytrip.userservice.service;

import java.util.List;

import com.planmytrip.userservice.Entity.User;

public interface UserService {

    User registerUser(User user);

    User login(String email, String password);

    String sendOtp(String email);

    boolean verifyOtp(String email, String otp);

    User getUserById(Long userId);

    List<User> getAllUsers();

}
