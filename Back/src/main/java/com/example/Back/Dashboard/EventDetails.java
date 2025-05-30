package com.example.Back.Dashboard;

import com.example.Back.Event.Event;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EventDetails {
    private String event;
    private int reservationCount;
    private int capacity;
}
