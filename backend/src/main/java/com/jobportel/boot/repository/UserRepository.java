package com.jobportel.boot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jobportel.boot.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
	User findByEmailAndPassword(String email, String password);
    boolean existsByEmail(String email);
}
