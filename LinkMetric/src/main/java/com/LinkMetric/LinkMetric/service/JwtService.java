package com.LinkMetric.LinkMetric.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class JwtService {
    @Value("${jwt.secret}")
    private String key ;
    public String generateToken(String userName) {
        return "hello world";
    }
}
