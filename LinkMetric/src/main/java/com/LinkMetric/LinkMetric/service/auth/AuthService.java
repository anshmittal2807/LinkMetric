package com.LinkMetric.LinkMetric.service.auth;

import com.LinkMetric.LinkMetric.Dtos.request.AuthRequest;
import com.LinkMetric.LinkMetric.repositories.UserRepository;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
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

    public Map<String, Object> handleLogin(AuthRequest authRequest , HttpServletResponse res) {

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
            response.put("role" , "user");

        System.out.println("Authentication done");
        Cookie cookie = new Cookie("token" ,jwtService.generateToken(username));
        cookie.setHttpOnly(true);
        cookie.setSecure(false);// HTTPS only
        cookie.setMaxAge(60*60*24*7);
        cookie.setPath("/");
        res.addCookie(cookie);

        return response;
    }
    public Map<String, Object> handleLogout( HttpServletResponse response) {
    Map<String  , Object> map = new HashMap<>();
        Cookie cookie = new Cookie("token", null);
        cookie.setHttpOnly(true);
        cookie.setSecure(false); // true in production
        cookie.setPath("/");
        cookie.setMaxAge(0); // delete immediately
        response.addCookie(cookie);
        map.put("success" , true);

        return map;

    }


    }
