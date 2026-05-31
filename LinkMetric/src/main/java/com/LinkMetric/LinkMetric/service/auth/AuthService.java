package com.LinkMetric.LinkMetric.service.auth;

import com.LinkMetric.LinkMetric.Dtos.request.AuthRequest;
import com.LinkMetric.LinkMetric.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class AuthService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtService jwtService;

    public Map<String, Object> handleLogin(AuthRequest authRequest) {

        Map<String, Object> response = new HashMap<>();

        System.out.println("all correct before authentication");
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authRequest.getUserName(),
                        authRequest.getPassword()
                )
        );
            String username = authentication.getName();
            System.out.println(username);

            response.put("success", true);
            response.put("token", jwtService.generateToken(username));


        System.out.println("Authentication done");


        return response;
    }

}
