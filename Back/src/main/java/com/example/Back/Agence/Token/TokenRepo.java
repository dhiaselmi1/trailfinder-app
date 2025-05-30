package com.example.Back.Agence.Token;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository

public interface TokenRepo extends JpaRepository<Token,Integer> {
    Optional<Token> findByToken(String token);
    List<Token> findByAgency_Id(Integer id);
}
