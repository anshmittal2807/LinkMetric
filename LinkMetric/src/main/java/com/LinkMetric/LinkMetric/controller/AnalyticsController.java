package com.LinkMetric.LinkMetric.controller;

import com.LinkMetric.LinkMetric.Dtos.analytics.DailyClickCount;
import com.LinkMetric.LinkMetric.service.AnalyticsService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/analytics")
public class AnalyticsController {

    private final AnalyticsService analyticsService;

    public AnalyticsController(AnalyticsService analyticsService) {
        this.analyticsService = analyticsService;
    }

    @GetMapping("/")
    public ResponseEntity<Map<String,Object>> getDailyAnalytics(
             Authentication authentication
    ) {
        return ResponseEntity.ok(
                analyticsService.getAnalytics( authentication)
        );
    }

}