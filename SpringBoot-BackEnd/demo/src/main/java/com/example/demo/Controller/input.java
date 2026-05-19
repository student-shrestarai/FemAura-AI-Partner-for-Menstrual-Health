package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.FemInput;
import com.example.demo.Service.InputService;




@RequestMapping("/input")
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class input {





    @Autowired
    private InputService services;


  @PostMapping("/submit")
    public ResponseEntity<String> submitHealthData(@RequestBody FemInput data) {

      String report = services.saveDataAndGenerateReport(data);
        return ResponseEntity.ok(report);
    }


   
}
