package com.LinkMetric.LinkMetric.controller;

import com.LinkMetric.LinkMetric.model.AuthRequest;
import com.LinkMetric.LinkMetric.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class AuthController {

    @Autowired
    private AuthService authService;

    @GetMapping("/home")
    public String hello (){
        return "hello";
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String , Object>> handleLogin(@Valid AuthRequest authRequest){
        return  new ResponseEntity<>(authService.handleLogin(authRequest) , HttpStatus.OK);
    }
}
