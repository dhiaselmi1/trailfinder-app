package com.example.Back.feedback;

import com.example.Back.Event.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FeedbackRepo extends JpaRepository<Feedback,Integer> {
    List<Feedback> findByEvent(Event event);
}
