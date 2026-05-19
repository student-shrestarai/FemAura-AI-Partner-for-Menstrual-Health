package com.example.demo.Entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Entity;


@Entity
public class Reports {

 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String userEmail;

    @OneToOne
    @JoinColumn(name = "input_id", nullable = false)
    private FemInput femInput;

    @Column(columnDefinition = "TEXT")
    private String reportContent;

    @Column(nullable = false)
    private LocalDateTime generatedAt;


public Long getId() {
    return id;
}

public void setId(Long id) {
    this.id = id;
}

public String getUserEmail() {
    return userEmail;
}

public void setUserEmail(String userEmail) {
    this.userEmail = userEmail;
}

public FemInput getFemInput() {
    return femInput;
}

public void setFemInput(FemInput femInput) {
    this.femInput = femInput;
}

public String getReportContent() {
    return reportContent;
}

public void setReportContent(String reportContent) {
    this.reportContent = reportContent;
}

public LocalDateTime getGeneratedAt() {
    return generatedAt;
}

public void setGeneratedAt(LocalDateTime generatedAt) {
    this.generatedAt = generatedAt;
}

 
    
    
}
