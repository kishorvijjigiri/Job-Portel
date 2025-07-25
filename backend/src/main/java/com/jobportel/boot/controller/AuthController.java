package com.jobportel.boot.controller;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.jobportel.boot.model.User;
import com.jobportel.boot.service.UserService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        if (userService.emailExists(user.getEmail())) {
            return ResponseEntity.badRequest().body("Email already exists");
        }

        if (!user.getPassword().equals(user.getConfirmPassword())) {
            return ResponseEntity.badRequest().body("Passwords do not match");
        }

        user.setConfirmPassword(null); // not saved in DB
        return ResponseEntity.ok(userService.registerUser(user));
    }


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        User existingUser = userService.loginUser(user.getEmail(), user.getPassword());
        if (existingUser != null) {
            existingUser.setPassword(null); // Hide password
            return ResponseEntity.ok(existingUser);
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }
}

