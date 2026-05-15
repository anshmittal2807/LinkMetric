package com.ansh.urlShortener.controller;

import com.ansh.urlShortener.DTOs.UserDto;
import com.ansh.urlShortener.model.User;
import com.ansh.urlShortener.repositories.UserRepository;
import com.ansh.urlShortener.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    public User registerUser (@RequestBody User user){
        return userService.registerUser(user);
    }

    @GetMapping("/home")
    public String hello (){
        return "hello world";
    }

}
