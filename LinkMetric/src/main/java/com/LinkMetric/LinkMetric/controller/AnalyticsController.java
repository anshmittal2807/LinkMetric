package com.LinkMetric.LinkMetric.controller;

import com.LinkMetric.LinkMetric.Dtos.analytics.DailyClickCount;
import com.LinkMetric.LinkMetric.service.AnalyticsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/analytics")
public class AnalyticsController {

    private final AnalyticsService analyticsService;

    public AnalyticsController(AnalyticsService analyticsService) {
        this.analyticsService = analyticsService;
    }

    @GetMapping("/{linkId}/daily")
    public ResponseEntity<Map<String,Object>> getDailyAnalytics(
            @PathVariable Long linkId
    ) {
        return ResponseEntity.ok(
                analyticsService.getAnalytics(linkId)
        );
    }

}