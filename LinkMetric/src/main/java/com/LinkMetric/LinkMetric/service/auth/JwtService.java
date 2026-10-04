package com.LinkMetric.LinkMetric.service.auth;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import javax.crypto.spec.SecretKeySpec;
import java.security.Key;

@Service
public class JwtService {

    @Value("${jwt.secret}")
    private String key ;

    private Key signingKey() {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            digest.update("LinkMetric JWT v1:".getBytes(StandardCharsets.UTF_8));
            byte[] bytes = digest.digest(key.getBytes(StandardCharsets.UTF_8));
            return new SecretKeySpec(bytes, "HmacSHA256");
        } catch (NoSuchAlgorithmException e) {
            throw new IllegalStateException("SHA-256 unavailable", e);
        }
    }

    public String generateToken(String userName) {
        return Jwts.builder().signWith(signingKey(), SignatureAlgorithm.HS256).
                setSubject(userName).setIssuedAt(new Date(System.currentTimeMillis())).
                setExpiration(new Date(System.currentTimeMillis() + 1000*60*60*48)).compact()
                ;
    }

    public String extractUserName(String token) {
        return extractClaims(token).getSubject();


    }

    private Claims extractClaims(String token){
        return Jwts.parserBuilder().setSigningKey(signingKey()).build().parseClaimsJws(token).getBody();
    }
    public boolean validateToken(String username, UserDetails userDetails , String token) {
        //check if username is same for both
        return  username.equals(userDetails.getUsername()) && !isTokenExpired(token);
        //check if token is expired or not

    }

    private boolean isTokenExpired(String token) {
        return extractClaims(token).getExpiration().before(new Date(System.currentTimeMillis()));
    }
}
