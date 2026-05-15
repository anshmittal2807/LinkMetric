package com.ansh.urlShortener.filter;

import com.ansh.urlShortener.service.JwtService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
// Filter that runs once for every incoming request
public class JwtFilter extends OncePerRequestFilter {

    @Autowired
    // Service used for JWT operations
    // like extracting username and validating token
    private JwtService jwtService;

    @Autowired
    // Loads user details from database/service
    private UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain
    ) throws ServletException, IOException {

        // Read Authorization header
        // Example:
        // Authorization: Bearer eyJhbGc...
        final String authHeader = request.getHeader("Authorization");

        String token = null;
        String username = null;

        // Check if header exists and starts with "Bearer "
        if(authHeader != null && authHeader.startsWith("Bearer ")) {

            // Remove "Bearer " part
            // Actual JWT token starts after index 7
            token = authHeader.substring(7);

            // Extract username from token
            username = jwtService.extractUsername(token);
        }

        // Proceed only if:
        // 1. username exists
        // 2. user is not already authenticated
        if(username != null
                && SecurityContextHolder
                .getContext()
                .getAuthentication() == null) {

            // Load full user details using username
            UserDetails userDetails =
                    userDetailsService.loadUserByUsername(username);

            // Validate token
            // Checks expiry, signature, username match etc.
            if(jwtService.validateToken(token, userDetails)) {

                // Create authentication object
                // This tells Spring Security:
                // "This user is authenticated"
                UsernamePasswordAuthenticationToken authToken =
                        new UsernamePasswordAuthenticationToken(
                                userDetails,
                                null,
                                userDetails.getAuthorities()
                        );

                // Add request-related details
                // like IP address, session info etc.
                authToken.setDetails(
                        new WebAuthenticationDetailsSource()
                                .buildDetails(request)
                );

                // Store authentication inside Security Context
                // Now Spring Security recognizes user as logged in
                SecurityContextHolder
                        .getContext()
                        .setAuthentication(authToken);
            }
        }

        // Continue request to next filter/controller
        filterChain.doFilter(request, response);
    }
}
