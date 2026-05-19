package com.LinkMetric.LinkMetric.controller;

import com.LinkMetric.LinkMetric.model.AuthRequest;
import com.LinkMetric.LinkMetric.model.User;
import com.LinkMetric.LinkMetric.repositories.UserRepository;
import com.LinkMetric.LinkMetric.service.auth.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping("/hello")
    public String hello (){
        return "hello";
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String , Object>> handleLogin(@Valid @RequestBody AuthRequest authRequest){
        return  new ResponseEntity<>(authService.handleLogin(authRequest) , HttpStatus.OK);
    }

    @PostMapping("/signup")
    public ResponseEntity<User> handleSignup(@Valid @RequestBody User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return  new ResponseEntity<>(userRepository.save(user) , HttpStatus.OK);
    }
}
