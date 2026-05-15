package com.ansh.urlShortener.service;

import com.ansh.urlShortener.Exception.UserAldreadyExistException;
import com.ansh.urlShortener.model.User;
import com.ansh.urlShortener.repositories.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User registerUser(User user) {

      if(userRepository.existsByemail(user.getEmail()) || userRepository.existsByuserName(user.getUserName())){
          throw new UserAldreadyExistException("User with same Username or email aldready exists");
      }

        return  userRepository.save(user);
    }
}
