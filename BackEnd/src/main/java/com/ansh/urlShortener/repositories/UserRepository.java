package com.ansh.urlShortener.repositories;

import com.ansh.urlShortener.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository <User , Integer> {

    Optional<User> findByuserName(String userName);

    boolean existsByemail(String email);

    boolean existsByuserName(String userName);
}
