package com.example.Back.Agence.Token;

import com.example.Back.Agence.Agency;
import com.example.Back.User.User;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
    @Getter
    @Setter
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    @Entity
    public class Token {
        @Id
        @GeneratedValue
        private Integer id;

        @Column(unique = true)
        private String token;
        private LocalDateTime createdAt;
        private LocalDateTime expiresAt;
        private LocalDateTime validatedAt;

        @ManyToOne
        @JoinColumn(name = "agencyId")
        private Agency agency;
        @ManyToOne
        @JoinColumn(name = "userId")
        private User user;
}
