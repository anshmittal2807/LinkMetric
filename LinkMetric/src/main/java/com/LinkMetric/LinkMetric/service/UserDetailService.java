package com.LinkMetric.LinkMetric.service;

import com.LinkMetric.LinkMetric.model.User;
import com.LinkMetric.LinkMetric.securityConfig.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import  com.LinkMetric.LinkMetric.repositories.userRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserDetailService implements UserDetailsService {

    @Autowired
    private userRepository userRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByUsername(username);
        UserDetailsImpl userDetails = new UserDetailsImpl(user.get());
        return userDetails;
    }
}
