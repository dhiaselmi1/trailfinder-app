package com.example.Back.Reservation;

import com.example.Back.Event.Event;
import com.example.Back.User.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReservationResponse {
    private int tickets_number;
    private User user;
    private Event event;
    private LocalTime reservation_time;
    private LocalDate reservation_date;
    private String code;
    private boolean isTicketScanned;

}
