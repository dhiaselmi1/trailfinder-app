package com.example.Back.Event;

import com.example.Back.Agence.Agency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
@Repository
public interface EventRepo extends JpaRepository<Event,Integer> {
    Optional<Event> findByName(String name);
    @Query("SELECT e FROM Event e WHERE e.agency.id = :agencyId AND e.date >= CURRENT_DATE ORDER BY e.date ASC")
    List<Event> findUpcomingEventsByAgency(@Param("agencyId") Integer agencyId);
    @Query("SELECT COUNT(e) FROM Event e WHERE e.agency.id = :agencyId")
    Integer countByAgencyId(@Param("agencyId") Integer agencyId);
    Event findTopByAgencyAndDateAfterOrderByDateAsc(Agency agency, LocalDate date);
    Event findTopByAgencyAndDateBeforeOrderByDateDesc(Agency agency, LocalDate date);
}
