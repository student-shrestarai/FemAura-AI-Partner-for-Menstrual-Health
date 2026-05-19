package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Reports;
import com.example.demo.Service.ReportService;

@RestController
@RequestMapping("/reports")
@CrossOrigin(origins = "http://localhost:3000")
public class ReportC {

    @Autowired
    private ReportService reportService;

    // 1️⃣ GET ALL REPORTS FOR LOGGED-IN USER
    @GetMapping("/user/{email}")
    public List<Reports> getReportsByUser(@PathVariable String email) {
        return reportService.getAllReport(email);
    }

    // 2️⃣ GET SINGLE REPORT BY ID
    @GetMapping("/{id}")
    public Reports getReportById(@PathVariable Long id) {
        return reportService.getReportById(id);
    }







    
}
