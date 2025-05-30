package com.example.Back.Reservation;

import com.example.Back.Event.Event;
import com.example.Back.User.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Reservation {

    private String code;
    @Column(name = "isticketscanned")
    private boolean isTicketScanned;


    @Id
    @GeneratedValue
    private Integer id;
    private LocalTime reservation_time;
    private LocalDate reservation_date;
    @ManyToOne(fetch = FetchType.EAGER)
    @JsonBackReference
     private User user ;

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonBackReference
   private Event event ;

}
