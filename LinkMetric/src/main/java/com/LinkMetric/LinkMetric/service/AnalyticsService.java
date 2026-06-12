package com.LinkMetric.LinkMetric.service;

import com.LinkMetric.LinkMetric.model.User;
import com.LinkMetric.LinkMetric.repositories.LogRepository;
import com.LinkMetric.LinkMetric.repositories.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class AnalyticsService {


    private final LogRepository logRepository;

    private final UserRepository userRepository;

    public AnalyticsService(LogRepository logRepository, UserRepository userRepository) {
        this.logRepository = logRepository;
        this.userRepository = userRepository;
    }


    public Map<String, Object> getAnalytics(Authentication authentication) {

        Map<String, Object> response = new HashMap<>();
        String userName = authentication.getName();
        Optional<User> userOptional = userRepository.findByUserName(userName);
        User user = userOptional.get();
        Integer userId = user.getUserId();

        try {

            response.put("success", true);


            response.put(
                    "dailyClicks",
                    logRepository.getDailyClicksByUser(userId)
            );


            response.put(
                    "monthlyClicks",
                    logRepository.getMonthlyClicksByUser(userId)
            );


            response.put(
                    "topReferrers",
                    logRepository.getTopReferrersByUser(userId)
            );


            return response;


        } catch (Exception e) {

            response.clear();

            response.put("success", false);
            response.put("message", "Failed to fetch analytics");
            response.put("error", e.getMessage());

            return response;
        }
    }
}