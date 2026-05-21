package com.LinkMetric.LinkMetric.repositories;

import com.LinkMetric.LinkMetric.model.Link;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LinkRepository extends JpaRepository<Link, Integer> {
    public boolean existsByLink(String link);
    public boolean existsByHash(String hash);

}
