package com.example.demo.Entity;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;





@Entity
public class FemInput {

    @Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
private int id;



    // ---- PERIOD DATES ----
    @Column(name = "period_start_date", nullable = false)
    @NotNull(message = "Start Date is required")
    private LocalDate startDate;

    @Column(name = "period_end_date", nullable = false)
    @NotNull(message = "End Date is required")
    private LocalDate endDate;

    @Column(nullable = false)
    @Min(value = 0, message = "Sleep hours cannot be negative")
    @Max(value = 24, message = "Sleep hours cannot exceed 24")
    private int sleepHours;

    // ---- STRESS LEVEL ----
    @Column(nullable = false)
    @NotBlank(message = "Stress level is required")
    private String stress;


     // ---- SYMPTOMS LIST ----
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(
            name = "femaura_symptoms",
            joinColumns = @JoinColumn(name = "health_data_id")
    )
    @Column(name = "symptom")
    private List<String> symptoms;

    // ---- NOTES ----
 @Column(columnDefinition = "TEXT")
    private String notes;

@Column(name = "user_email", nullable = false)
    private String userEmail;

    @Column(name = "cycle_length") // optional: nullable
private Integer cycleLength;

public Integer getCycleLength() { return cycleLength; }
public void setCycleLength(Integer cycleLength) { this.cycleLength = cycleLength; }

//     @Column(name = "cycle_length")
// private Integer cycleLength; // nullable for first entry



// @ManyToOne(fetch = FetchType.LAZY)
// @JoinColumn(name = "user_id", nullable = false)
// private Registration user;

    public String getuserEmail() {
        return userEmail;
    }

    public void setuserEmail( String userEmail) {
        this.userEmail = userEmail;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public int getSleepHours() {
        return sleepHours;
    }

    public void setSleepHours(int sleepHours) {
        this.sleepHours = sleepHours;
    }

    public String getStress() {
        return stress;
    }

    public void setStress(String stress) {
        this.stress = stress;
    }

    public List<String> getSymptoms() {
        return symptoms;
    }

    public void setSymptoms(List<String> symptoms) {
        this.symptoms = symptoms;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

//     public Integer getCycleLength() {
//         return cycleLength;
//     }

//     public void setCycleLength(Integer cycleLength) {
//         this.cycleLength = cycleLength;
//     }

//     public Registration getUser() {
//     return user;
// }

// public void setUser(Registration user) {
//     this.user = user;
// }



    
}
