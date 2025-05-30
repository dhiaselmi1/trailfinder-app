package com.example.Back.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface UserRepo extends JpaRepository<User,Integer> {
    Optional<User> findByEmail(String email);
    @Query("SELECT COUNT(u) FROM User u WHERE u.id IN (SELECT r.user.id FROM Reservation r WHERE r.event.agency.id = :agencyId)")
    Integer countByReservationsEventAgencyId(@Param("agencyId") Integer agencyId);
}
