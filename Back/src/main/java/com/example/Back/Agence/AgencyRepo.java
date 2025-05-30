package com.example.Back.Agence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface AgencyRepo extends JpaRepository<Agency,Integer> {
    Optional<Agency> findByAgency(String agency );
    Optional<Agency> findByEmail(String email );


    @Transactional
    @Modifying
    @Query("UPDATE Agency a SET a.isEnabled = TRUE WHERE a.agency = ?1")
    int enableAgency(String nomagence);


}
