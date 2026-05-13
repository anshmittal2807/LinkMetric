package com.ansh.urlShortener.security;

import com.ansh.urlShortener.filter.JwtFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityFilter {

    private JwtFilter jwtFilter;

    public SecurityFilterChain securityFilter (HttpSecurity https) throws Exception {

      // adding the routes to check for authentucated  users only
        https.authorizeHttpRequests(auth ->
                auth.requestMatchers("/home/**").permitAll().anyRequest().authenticated());

        // disabling csrf token
        https.csrf(csrf -> csrf.disable());

        //adding filter
        https.addFilterBefore(jwtFilter , UsernamePasswordAuthenticationFilter.class);

        // making the authentication stateless;
        https.sessionManagement(session ->
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));


        return  https.build();
    }
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    public AuthenticationProvider authenticationProvider (){

    }
}
