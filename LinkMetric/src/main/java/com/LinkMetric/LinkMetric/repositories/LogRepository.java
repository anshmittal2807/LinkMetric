package com.LinkMetric.LinkMetric.repositories;

import com.LinkMetric.LinkMetric.Dtos.analytics.DailyClickCount;
import com.LinkMetric.LinkMetric.Dtos.analytics.MonthlyClickCount;
import com.LinkMetric.LinkMetric.model.Link;
import com.LinkMetric.LinkMetric.model.Log;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface LogRepository extends JpaRepository<Log , Long> {


    public void deleteByLink(Link link);


    @Query(value = """
        SELECT
            DATE(click_time_and_date) as day,
            COUNT(*) as clicks
        FROM log
        WHERE link_link_id = :linkId
        GROUP BY DATE(click_time_and_date)
        ORDER BY day
        LIMIT 7
        """, nativeQuery = true)
    List<DailyClickCount> getDailyClicks(Long linkId);


    @Query(value = """
        SELECT
            DATE_FORMAT(click_time_and_date,'%Y-%m') as month,
            COUNT(*) as clicks
        FROM log
        WHERE link_link_id = :linkId
        GROUP BY DATE_FORMAT(click_time_and_date,'%Y-%m')
        ORDER BY month
        LIMIT 7
        """, nativeQuery = true)
    List<MonthlyClickCount> getMonthlyClicks(Long linkId);



}
