package com.example.demo.Entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.validation.constraints.NotBlank;
import jakarta.persistence.Id;

@Entity

public class Registration {

 public enum Role {
        ADMIN, EDITOR , USER
    }
  

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private Integer id;

     @NotBlank(message = "Full name cannot be empty")
    private String name;

     @Column(nullable = false , unique = true)
    private String email;

     @Column(nullable = false , unique = true)
    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;

     @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime  createdAt;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String Name) {
         this.name = (Name != null) ? Name.trim() : null;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String Email) {
        this.email = Email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String Password) {
        this.password = Password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

      public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }


   
    
}
