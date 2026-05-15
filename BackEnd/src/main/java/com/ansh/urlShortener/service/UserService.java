package com.ansh.urlShortener.service;

import com.ansh.urlShortener.DTOs.UserDto;
import com.ansh.urlShortener.Exception.UserAldreadyExistException;
import com.ansh.urlShortener.model.User;
import com.ansh.urlShortener.repositories.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserService {

    private UserRepository userRepository;

    private BCryptPasswordEncoder passwordEncoder;
    public UserService(UserRepository userRepository , BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Map<String, Object> registerUser(User user) {

      if(userRepository.existsByemail(user.getEmail()) || userRepository.existsByuserName(user.getUserName())){
          throw new UserAldreadyExistException("User with same Username or email aldready exists");
      }
      passwordEncoder.encode(user.getPassword());
      userRepository.save(user);
        Map<String , Object> response = new HashMap<>();
      response.put("success" , true);
      response.put("user" , new UserDto(user.getUserName(), user.getEmail()));
        return  response;
    }

}

