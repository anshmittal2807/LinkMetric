package com.ansh.urlShortener.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;

@Service
// Service class responsible for all JWT operations
public class JwtService {

    // Secret key used to sign JWT
    // Keep this secret in real applications
    private static final String SECRET =
            "mysecretkeymysecretkeymysecretkey12345";

    // Convert secret string into security key object
    private final Key key = Keys.hmacShaKeyFor(SECRET.getBytes());

    // Generate JWT token for authenticated user
    public String generateToken(UserDetails userDetails) {

        return Jwts.builder()

                // Store username inside token
                .setSubject(userDetails.getUsername())

                // Token creation time
                .setIssuedAt(new Date())

                // Token expiry time
                // Current time + 24 hours
                .setExpiration(
                        new Date(
                                System.currentTimeMillis()
                                        + 1000 * 60 * 60 * 24
                        )
                )

                // Sign token using secret key and algorithm
                .signWith(key, SignatureAlgorithm.HS256)

                // Convert into compact JWT string
                .compact();
    }

    // Extract username from token
    public String extractUsername(String token) {

        // "sub" claim stores username
        return extractAllClaims(token).getSubject();
    }

    // Validate JWT token
    public boolean validateToken(
            String token,
            UserDetails userDetails
    ) {

        // Extract username from token
        String username = extractUsername(token);

        // Token valid if:
        // 1. usernames match
        // 2. token not expired
        return username.equals(userDetails.getUsername())
                && !isTokenExpired(token);
    }

    // Check if token is expired
    private boolean isTokenExpired(String token) {

        return extractAllClaims(token)

                // Get expiry date from token
                .getExpiration()

                // Check if expiry date is before current time
                .before(new Date());
    }

    // Extract all claims/data from JWT token
    private Claims extractAllClaims(String token) {

        return Jwts.parserBuilder()

                // Use secret key to verify token signature
                .setSigningKey(key)

                .build()

                // Parse JWT token
                .parseClaimsJws(token)

                // Return token payload/body
                .getBody();
    }
}