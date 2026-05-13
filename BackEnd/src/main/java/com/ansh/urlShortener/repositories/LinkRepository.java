package com.ansh.urlShortener.repositories;

import com.ansh.urlShortener.model.Link;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LinkRepository extends JpaRepository<Link , Integer> {

}
