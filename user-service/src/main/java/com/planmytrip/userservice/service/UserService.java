package com.planmytrip.userservice.service;

import java.util.List;

import com.planmytrip.userservice.Entity.User;

public interface UserService {

    User registerUser(User user);

<<<<<<< HEAD
    User login(String email, String password);

    String sendOtp(String email);

    boolean verifyOtp(String email, String otp);

    User getUserById(Long userId);

    List<User> getAllUsers();
=======
    String sendOtp(String email);   // OTP logic

    boolean verifyOtp(String email, String otp);

    User login(String email, String password);

    User getUserById(Long id);
>>>>>>> 089c3f8e9ca150b32ba7bca8f1d7b23b5ffe5b6a

}
