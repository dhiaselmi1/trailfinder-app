package com.example.Back.feedback;

import com.example.Back.Event.Event;
import com.example.Back.User.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
public class Feedback {
    @Id
    @GeneratedValue
    private Integer id;
    private String title;
    private String description;
    private int Stars;
    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;
    @ManyToOne
    @JoinColumn(name = "event_id")
    @JsonBackReference
    private Event event;

}
