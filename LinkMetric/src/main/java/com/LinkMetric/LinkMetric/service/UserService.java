package com.LinkMetric.LinkMetric.service;

import com.LinkMetric.LinkMetric.Dtos.request.RegisterRequest;
import com.LinkMetric.LinkMetric.Dtos.response.UserDto;
import com.LinkMetric.LinkMetric.Exception.UserExistsException;
import com.LinkMetric.LinkMetric.model.User;
import com.LinkMetric.LinkMetric.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public Map<String , Object> handleRegistration (RegisterRequest registerRequest){

            if(userRepository.existsByUserName(registerRequest.getUserName())){
                throw new UserExistsException("User aldready with the same userName");
            }

            if( userRepository.existsByEmail(registerRequest.getEmail())) {
                throw new UserExistsException("User aldready with the same Email");
            }

            User user = new User(registerRequest.getName()
                    ,registerRequest.getEmail(), registerRequest.getUserName(), registerRequest.getPassword());
            user.setPassword(passwordEncoder.encode(user.getPassword()));

            User savedUser = userRepository.save(user);

            Map<String , Object> response = new HashMap<>();
            response.put("success" , true);
            response.put("userData" , new UserDto(savedUser.getName() , savedUser.getEmail() , savedUser.getUserName()));
            return  response;

    }

}
