package com.LinkMetric.LinkMetric.service.auth;

import com.LinkMetric.LinkMetric.Dtos.request.AuthRequest;
import com.LinkMetric.LinkMetric.Dtos.response.UserDto;
import com.LinkMetric.LinkMetric.Exception.UserNotLoggedInException;
import com.LinkMetric.LinkMetric.model.User;
import com.LinkMetric.LinkMetric.repositories.UserRepository;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;

import java.time.Duration;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtService jwtService;

    public Map<String, Object> handleLogin(AuthRequest authRequest, HttpServletResponse res) {

        Map<String, Object> response = new HashMap<>();

        System.out.println("all correct before authentication");

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authRequest.getUserName(),
                        authRequest.getPassword()
                )
        );

        String username = authentication.getName();
        String jwt = jwtService.generateToken(username);

        response.put("success", true);
        response.put("role", "user");

        System.out.println("Authentication done");

        ResponseCookie cookie = ResponseCookie.from("token", jwt)
                .httpOnly(true)
                .secure(true)
                .sameSite("None")
                .path("/")
                .maxAge(Duration.ofDays(7))
                .build();

        res.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());

        Optional<User> userOptional = userRepository.findByUserName(username);
        User user = userOptional.get();

        response.put(
                "user",
                new UserDto(
                        user.getName(),
                        user.getEmail(),
                        username,
                        user.getTotalLinks(),
                        user.getTotalClicks()
                )
        );

        return response;
    }

    public Map<String, Object> handleLogout(HttpServletResponse response) {

        Map<String, Object> map = new HashMap<>();

        ResponseCookie cookie = ResponseCookie.from("token", "")
                .httpOnly(true)
                .secure(true)
                .sameSite("None")
                .path("/")
                .maxAge(0)
                .build();

        response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());

        map.put("success", true);

        return map;
    }
    public  Map<String , Object> checkAuth(Authentication authentication){
        Map<String , Object> map = new HashMap<>();
        if(authentication ==  null){
            throw  new UserNotLoggedInException("user not logged in");
        }
        map.put("success" , true);
        Optional<User> userOptional = userRepository.findByUserName(authentication.getName());
        User user = userOptional.get();
        map.put("user" , new UserDto(user.getName() , user.getEmail() , user.getUserName() , user.getTotalLinks() , user.getTotalClicks()));
        return  map;
    }


    }
