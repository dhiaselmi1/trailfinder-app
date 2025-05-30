package com.example.Back.feedback;

import com.example.Back.Event.Event;
import com.example.Back.Event.EventRepo;
import com.example.Back.Reservation.Reservation;
import com.example.Back.User.User;
import com.example.Back.User.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class FeedbackService {
    private final  FeedbackRepo feedbackRepo;
    private final EventRepo eventRepo;
    private final UserRepo userRepo;
    public Feedback save(FeedBackRequest feedback)
    {    Optional<Event> e = eventRepo.findById(feedback.getEvent_id());
        if(e.isEmpty())
            throw new IllegalStateException("pas d'event avec cette id");
        Optional<User> u = userRepo.findById(feedback.getUser_id());
        if(u.isEmpty())
            throw new IllegalStateException("pas d'utilisateur avec cette id");
        Feedback f = Feedback.builder()
                .title(feedback.getTitle())
                .description(feedback.getDescription())
                .Stars(feedback.getStars())
                .user(u.get())
                .event(e.get())
                .build();
        feedbackRepo.save(f);
        return f;
    }
    public List<Feedback> getAll()
    {
        return feedbackRepo.findAll();
    }
    public List<FeedbackResponse> getByEvent(Integer id)
    { Event e = eventRepo.findById(id).get();
List<FeedbackResponse> f1 = new ArrayList<>();
    List <Feedback>   f= feedbackRepo.findByEvent(e);
        for (Feedback feedback : f) {
            FeedbackResponse feedback1 = new FeedbackResponse();
            feedback1.setEvent_id(feedback.getEvent().getId());
            feedback1.setUser(feedback.getUser());
            feedback1.setTitle(feedback.getTitle());
            feedback1.setDescription(feedback.getDescription());
            feedback1.setStars(feedback.getStars());
            f1.add(feedback1);
        }
        return f1;
    }
    public void delete(Integer id)
    {
        feedbackRepo.deleteById(id);
    }
}
