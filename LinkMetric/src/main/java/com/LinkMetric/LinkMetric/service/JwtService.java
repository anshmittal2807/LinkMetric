package com.LinkMetric.LinkMetric.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Date;

@Service
public class JwtService {
    
    @Value("${jwt.secret}")
    private String key ;

    public String generateToken(String userName) {
        return Jwts.builder().signWith(SignatureAlgorithm.HS256, key).
                setSubject(userName).setIssuedAt(new Date(System.currentTimeMillis())).
                setExpiration(new Date(System.currentTimeMillis() + 1000*60*60*48)).compact()
                ;
    }

}
