package com.jobportel.boot.model;



import jakarta.persistence.*;
import lombok.Data;
@Data
@Entity
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String role;
    private int experience;
    private String lastDate;
    private double salary;
    private String description;

    // Getters and Setters
    
}

