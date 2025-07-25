package com.jobportel.boot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jobportel.boot.model.Job;

public interface JobRepository extends JpaRepository<Job, Long>{

}
