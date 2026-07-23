package com.planmytrip.userservice.controller;

import com.planmytrip.userservice.Entity.User;
import com.planmytrip.userservice.dto.LoginResponse;
import com.planmytrip.userservice.dto.LoginRequest;
import com.planmytrip.userservice.security.JwtUtil;
import com.planmytrip.userservice.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService service;
    
    @Autowired
    private JwtUtil jwtUtil;

    // ✅ REGISTER USER
    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return service.registerUser(user);
    }

    // ✅ LOGIN
    

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {

        User user = service.login(request.getEmail(), request.getPassword());

        if (user == null) {
            throw new RuntimeException("Invalid credentials");
        }

        String token = jwtUtil.generateToken(user.getEmail());

        return new LoginResponse(token, user);
    }

    // ✅ SEND OTP
    @PostMapping("/send-otp")
    public String sendOtp(@RequestParam String email) {
        return service.sendOtp(email);
    }

    // ✅ VERIFY OTP
    @PostMapping("/verify-otp")
    public String verifyOtp(@RequestParam String email,
                            @RequestParam String otp) {

        boolean isValid = service.verifyOtp(email, otp);

        if (isValid) {
            return "OTP verified successfully";
        } else {
            return "Invalid OTP";
        }
    }

    // ✅ GET USER BY ID
    @GetMapping("/id/{id}") 
    public User getUserById(@PathVariable Long id) {
        return service.getUserById(id);
    }

    // ✅ GET ALL USERS
    @GetMapping
    public List<User> getAllUsers() {
        return service.getAllUsers();
    }
}