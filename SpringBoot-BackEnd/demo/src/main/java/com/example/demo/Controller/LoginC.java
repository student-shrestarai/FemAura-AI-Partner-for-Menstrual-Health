package com.example.demo.Controller;

import java.util.HashMap;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Login;
import com.example.demo.Entity.Registration;
import com.example.demo.Repository.LoginRepo;
import com.example.demo.Repository.RegRepository;



@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginC {


    @Autowired
    private LoginRepo logrepo;

    @Autowired
    private RegRepository userrepo;

     @Autowired
private PasswordEncoder passwordEncoder;




    // @Autowired
    // private JwtUtil jwtUtil;


    @PostMapping
    public ResponseEntity<?> validateUser (@RequestBody Login loguser){
        String gmail = loguser.getEmail();
        String log_pass = loguser.getPassword();
       

    Optional<Registration> user_reg = userrepo.findByEmail(gmail);
    
    if(!user_reg.isPresent()) {
    return ResponseEntity.badRequest().body("User does not exist , please register");

        
    }
    else{

        Registration User = user_reg.get();
    String hashedPassword = User.getPassword();
       Registration.Role role = User.getRole();
       String name = User.getName();


       if (passwordEncoder.matches(log_pass, hashedPassword)){

        //  String token = jwtUtil.generateToken(gmail , role.name() , name);

            
            // Map<String, String> response = new HashMap<>();
            // response.put("token", token);
            // response.put("message", "Login successful");

            // return ResponseEntity.ok(response);
             return ResponseEntity.ok("Login Successful");
        }
        else{

            return ResponseEntity.badRequest().body("Passowrd does not match");

        }

    }
    
}
    
}
