package com.example.demo.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Registration;
import com.example.demo.Repository.RegRepository;
import com.example.demo.Service.RegService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/Registration")
public class Reg {
    @Autowired
    private RegRepository reg_repo;

    @Autowired
    private RegService reg_s;

    @PostMapping
public ResponseEntity<?> addUser(@RequestBody Registration newUser) {
    String gmail = newUser.getEmail();

    Optional<Registration> user_reg = reg_repo.findByEmail(gmail);

    if (user_reg.isPresent()) {
        return ResponseEntity.badRequest().body("User already exists");
    } else {
        try {
            this.reg_s.saveuser(newUser);
            return ResponseEntity.ok("User added successfully");
        } catch (DataIntegrityViolationException e) {
            // Handles simultaneous registration with the same email
            return ResponseEntity.status(HttpStatus.CONFLICT)
                                 .body("Email already exists (race condition handled)");
        }
    }
}





 // GET: Get All Users
 @GetMapping
 public ResponseEntity<?> getUsers() {
     return ResponseEntity.ok(this.reg_s.getuser());
 }



// GET: Get User by ID


    @GetMapping("/{id}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> getUserById(@PathVariable Integer id) {
        Registration foundUser = this.reg_s.getbyId(id);
        if (foundUser == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body("User with ID " + id + " does not exist");
        }
        return ResponseEntity.ok(foundUser);
    }

    // DELETE: Delete User

    
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> deleteUser(@PathVariable Integer id) {
        Registration foundUser = this.reg_s.getbyId(id);
        if (foundUser == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body("User with ID " + id + " does not exist");
        }
        this.reg_s.deleteuser(id);
        return ResponseEntity.ok("User with ID " + id + " deleted successfully");
    }

    // PUT: Update User
    
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN') or #updatedUser.email == authentication.name")
    public ResponseEntity<?> updateUser(@PathVariable Integer id, @RequestBody Registration updatedUser)
     {
        Registration  foundUser = this.reg_s.getbyId(id);
        if (foundUser == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body("User with ID " + id + " does not exist");
        }
        Registration updated = this.reg_s.updateuser(id, updatedUser);
        return ResponseEntity.ok(updated);
    }

    
}
