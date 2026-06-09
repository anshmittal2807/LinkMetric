package com.LinkMetric.LinkMetric.service;

import com.LinkMetric.LinkMetric.Dtos.analytics.DailyClickCount;
import com.LinkMetric.LinkMetric.repositories.LogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AnalyticsService {


    private final LogRepository logRepository;

    public AnalyticsService(LogRepository logRepository) {
        this.logRepository = logRepository;
    }


    public Map<String, Object> getAnalytics(Long linkId) {

        Map<String, Object> response = new HashMap<>();

        try {

            response.put("success", true);

            response.put(
                    "dailyClicks",
                    logRepository.getDailyClicks(linkId)
            );

            response.put(
                    "weeklyClicks",
                    logRepository.getWeeklyClicks(linkId)
            );

            response.put(
                    "monthlyClicks",
                    logRepository.getMonthlyClicks(linkId)
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
