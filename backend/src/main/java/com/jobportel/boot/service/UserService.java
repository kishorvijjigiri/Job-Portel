package com.jobportel.boot.service;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobportel.boot.model.User;
import com.jobportel.boot.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    public User registerUser(User user) {
        return userRepo.save(user);
    }

    public User loginUser(String email, String password) {
        return userRepo.findByEmailAndPassword(email, password);
    }

    public boolean emailExists(String email) {
        return userRepo.existsByEmail(email);
    }
}
