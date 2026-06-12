package com.LinkMetric.LinkMetric.repositories;

import com.LinkMetric.LinkMetric.Dtos.analytics.DailyClickCount;
import com.LinkMetric.LinkMetric.Dtos.analytics.MonthlyClickCount;
import com.LinkMetric.LinkMetric.Dtos.analytics.TopReferrer;
import com.LinkMetric.LinkMetric.model.Link;
import com.LinkMetric.LinkMetric.model.Log;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface LogRepository extends JpaRepository<Log, Long> {


    void deleteByLink(Link link);


    @Query(value = """
        SELECT
            DATE(l.click_time_and_date) as day,
            COUNT(*) as clicks
        FROM log l
        JOIN link li 
            ON l.link_link_id = li.link_id
        WHERE li.user_id = :userId
        GROUP BY DATE(l.click_time_and_date)
        ORDER BY day
        LIMIT 7
        """, nativeQuery = true)
    List<DailyClickCount> getDailyClicksByUser(Integer userId);



    @Query(value = """
        SELECT
            DATE_FORMAT(l.click_time_and_date,'%Y-%m') as month,
            COUNT(*) as clicks
        FROM log l
        JOIN link li 
            ON l.link_link_id = li.link_id
        WHERE li.user_id = :userId
        GROUP BY DATE_FORMAT(l.click_time_and_date,'%Y-%m')
        ORDER BY month
        LIMIT 7
        """, nativeQuery = true)
    List<MonthlyClickCount> getMonthlyClicksByUser(Integer userId);



    @Query(value = """
        SELECT
            l.referer as referer,
            COUNT(*) as clicks
        FROM log l
        JOIN link li 
            ON l.link_link_id = li.link_id
        WHERE li.user_id = :userId
          AND l.referer IS NOT NULL
          AND l.referer <> ''
        GROUP BY l.referer
        ORDER BY clicks DESC
        LIMIT 3
        """, nativeQuery = true)
    List<TopReferrer> getTopReferrersByUser(Integer userId);

}