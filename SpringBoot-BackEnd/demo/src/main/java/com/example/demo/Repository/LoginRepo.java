package com.example.demo.Repository;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.Entity.Login;

public interface LoginRepo extends CrudRepository<Login , Integer>{
    
    
}
