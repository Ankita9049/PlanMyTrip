package com.planmytrip.userservice.service;

import java.util.List;

import com.planmytrip.userservice.Entity.User;

public interface UserService {

    User registerUser(User user);

    String sendOtp(String email);   // OTP logic

    boolean verifyOtp(String email, String otp);

    User login(String email, String password);

    User getUserById(Long id);

}
