package com.ansh.urlShortener.controller;

import com.ansh.urlShortener.model.User;


import com.ansh.urlShortener.service.JwtService;
import lombok.Data;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/login")
    public String login(@RequestBody User request) {

        Authentication authentication =
                authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(
                                request.getUserName(),
                                request.getPassword()
                        )
                );

        UserDetails user =
                (UserDetails) authentication.getPrincipal();
            String token =  jwtService.generateToken(user);
        return " ";
    }
}
