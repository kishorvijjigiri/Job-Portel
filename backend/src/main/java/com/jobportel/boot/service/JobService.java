package com.jobportel.boot.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobportel.boot.model.Job;
import com.jobportel.boot.repository.JobRepository;

import java.util.List;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepo;

    public Job addJob(Job job) {
        return jobRepo.save(job);
    }

    public List<Job> getAllJobs() {
        return jobRepo.findAll();
    }
}
