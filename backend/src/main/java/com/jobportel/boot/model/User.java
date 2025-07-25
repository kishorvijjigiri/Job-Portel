package com.jobportel.boot.model;



import jakarta.persistence.*;
import lombok.Data;
@Data
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String password;
    @Transient
    private String confirmPassword;
    private String role; // "USER" or "ADMIN"

    // Getters and Setters
   
}
