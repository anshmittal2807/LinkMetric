package com.LinkMetric.LinkMetric.securityConfig;

import com.LinkMetric.LinkMetric.Exception.UserNotFoundException;
import com.LinkMetric.LinkMetric.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import com.LinkMetric.LinkMetric.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserDetailService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UserNotFoundException {
        Optional<User> user = Optional.ofNullable(userRepository.findByUserName(username).orElseThrow(()
                -> new UserNotFoundException("User with username :" + username + " not found")));
        UserDetailsImpl userDetails = new UserDetailsImpl(user.get());
        return userDetails;
    }
}
