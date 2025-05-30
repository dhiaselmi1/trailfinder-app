package com.example.Back.feedback;

import com.example.Back.Event.Event;
import com.example.Back.User.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FeedbackResponse {

    private String title;
    private String description;
    private int stars;
    private User user;
    private Integer event_id;
}
