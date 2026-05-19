package com.example.demo.Repository;
import org.springframework.data.repository.CrudRepository;
import com.example.demo.Entity.FemInput;


    public interface InputRepo extends CrudRepository<FemInput , Integer>{
// finds the first row that has the latest date
// it returns the entire row so labelled as FemInput
        // FemInput findTopByOrderByStartDateDesc(Registration user);

        FemInput findTopByUserEmailOrderByStartDateDesc(String userEmail);


    }
    

