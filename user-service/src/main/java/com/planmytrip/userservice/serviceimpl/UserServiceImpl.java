package com.planmytrip.userservice.serviceimpl;

import com.planmytrip.userservice.Entity.User;
import com.planmytrip.userservice.Repository.UserRepository;
import com.planmytrip.userservice.service.UserService;
import com.planmytrip.userserviceEnum.Role;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository repository;

    // Temporary OTP storage
    private Map<String, String> otpStorage = new HashMap<>();

    @Override
    public User registerUser(User user) {
        if (user.getRole() == null) {
            user.setRole(Role.USER);
        }
        return repository.save(user);
    }

    // 🔐 LOGIN
    @Override
    public User login(String email, String password) {
        User user = repository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!user.getPassword().equals(password)) {
            throw new RuntimeException("Invalid password");
        }

        return user;
    }

    // 📩 SEND OTP
    @Override
    public String sendOtp(String email) {

        // check user exists
        repository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // generate 6-digit OTP
        String otp = String.valueOf(new Random().nextInt(900000) + 100000);

        // store OTP
        otpStorage.put(email, otp);

        // simulate sending (console)
        System.out.println("OTP for " + email + " is: " + otp);

        return "OTP sent successfully";
    }

    // ✅ VERIFY OTP
    @Override
    public boolean verifyOtp(String email, String otp) {

        String storedOtp = otpStorage.get(email);

        if (storedOtp == null) {
            throw new RuntimeException("OTP not found. Please request again.");
        }

        if (storedOtp.equals(otp)) {
            otpStorage.remove(email); // clear after success
            return true;
        }

        return false;
    }

    @Override
    public User getUserById(Long userId) {
        return repository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    @Override
    public List<User> getAllUsers() {
        return repository.findAll();
    }
}