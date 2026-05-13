package com.ansh.urlShortener.service;

import com.ansh.urlShortener.model.User;
import com.ansh.urlShortener.repositories.UserRepository;
import com.ansh.urlShortener.security.UserDetail;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;


//this class is reponsible to load the user from the DB
@Service
public class UserDetailService implements UserDetailsService {
    private UserRepository userRepository;

    public UserDetailService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> userOpt =  userRepository.findByUsername(username);
        if(userOpt.isEmpty()){
            return null ;
        }
        return new UserDetail(userOpt.get());
    }
}
