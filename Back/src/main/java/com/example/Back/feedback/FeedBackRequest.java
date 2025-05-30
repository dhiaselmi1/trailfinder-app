package com.example.Back.feedback;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FeedBackRequest {
    private String title;
    private String description;
    private int stars;
    private Integer user_id;
    private Integer event_id;

}
