package com.example.Back.feedback;

import com.example.Back.Reservation.Reservation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/gestion")
public class FeedbackController {
    private final FeedbackService feedbackService;
    @PostMapping(path="feedback")
    public Feedback addFeedback(@RequestBody FeedBackRequest f)
    {
        return feedbackService.save(f);
    }
    @GetMapping("feedback")
    public List<Feedback> GetAllEvents()
    {

        return  feedbackService.getAll();
    }
    @DeleteMapping(path = "feedback/{id}")
    public  void deleteFeedback(@PathVariable  Integer id)  {
        feedbackService.delete(id);
    }
    @GetMapping(path ="feedbackEvent/{id}" )
    public List<FeedbackResponse> GetReservationsByEvent(@PathVariable  Integer id)
    {
        return  feedbackService.getByEvent(id);
    }
}
