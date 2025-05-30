package com.example.Back.partner;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PartnerRepo extends JpaRepository<Partner,Integer> {
    Optional<Partner> findByName(String name);
}
