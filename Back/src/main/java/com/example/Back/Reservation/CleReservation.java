package com.example.Back.Reservation;

import com.example.Back.Event.Event;
import com.example.Back.User.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CleReservation implements Serializable {
    private Integer id;
    private Event event;
    private User user;
    private LocalDate reservation_date;
    private LocalTime reservation_time;
}
