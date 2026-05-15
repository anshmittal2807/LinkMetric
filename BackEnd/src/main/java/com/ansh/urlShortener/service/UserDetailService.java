package com.ansh.urlShortener.service;

import com.ansh.urlShortener.model.User;
import com.ansh.urlShortener.repositories.UserRepository;
import com.ansh.urlShortener.security.UserDetail;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import org.springframework.stereotype.Service;

import java.util.Optional;


// This service is responsible for loading user data from DB
// Spring Security automatically calls this during authentication
@Service
public class UserDetailService implements UserDetailsService {

    // Repository used to fetch user from database
    private UserRepository userRepository;

    // Constructor Injection
    public UserDetailService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {

        // Find user in database using username
        Optional<User> userOpt =
                userRepository.findByuserName(username);

        // If user does not exist
        if(userOpt.isEmpty()) {

            // Better to throw exception instead of returning null
            throw new UsernameNotFoundException(
                    "User not found"
            );
        }

        // Convert custom User entity into Spring Security UserDetails object
        return new UserDetail(userOpt.get());
    }
}