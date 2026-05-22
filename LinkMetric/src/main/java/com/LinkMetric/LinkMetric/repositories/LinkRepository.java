package com.LinkMetric.LinkMetric.repositories;

import com.LinkMetric.LinkMetric.model.Link;
import com.LinkMetric.LinkMetric.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LinkRepository extends JpaRepository<Link, Integer> {
    public boolean existsByHash(String hash);
    public List<Link> findAllByOwner(User owner);
}
