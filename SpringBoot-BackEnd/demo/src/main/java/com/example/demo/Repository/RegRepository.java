package com.example.demo.Repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.Entity.Registration;

public interface RegRepository  extends CrudRepository<Registration,Integer>{
    Optional<Registration>findByEmail(String Email);
    
}
