package com.ansh.urlShortener.controller;

import com.ansh.urlShortener.DTOs.UserDto;
import com.ansh.urlShortener.model.User;
import com.ansh.urlShortener.repositories.UserRepository;
import com.ansh.urlShortener.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.Objects;

@RestController
public class UserController {

    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser (@RequestBody User user){
        Map<String , Object> response =  userService.registerUser(user);
        return new ResponseEntity<>(response , HttpStatus.OK);
    }

    @GetMapping("/home")
    public String hello (){
        return "hello world";
    }

}
