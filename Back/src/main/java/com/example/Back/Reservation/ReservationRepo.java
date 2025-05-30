package com.example.Back.Reservation;

import com.example.Back.Event.Event;
import com.example.Back.User.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface ReservationRepo extends JpaRepository<Reservation,CleReservation> {
    Optional<Reservation> findByCode(String unique_code);
    List<Reservation> findByEvent(Event event);
   List<Reservation> findByUser(User user);
    Long countByEvent(Event event);
    @Query("SELECT r FROM Reservation r WHERE r.event.agency.id = :agencyId")
    List<Reservation> findByEventAgencyId(@Param("agencyId") Integer agencyId);

    @Query("SELECT COUNT(r) FROM Reservation r WHERE r.event.agency.id = :agencyId")
    Long countByEventAgencyId(@Param("agencyId") Integer agencyId);
}
