package com.example.Back.Event;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EventRequest {

    private String name;
    private LocalDate date ;
    private LocalTime time;
    private String duration;
    private String location;
    private  int capacity;
    private int ticket_price;
    private   String  category;
    private String description;
    private MultipartFile image;
}
