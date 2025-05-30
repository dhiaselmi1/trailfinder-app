package com.example.Back.Event;

import com.example.Back.Agence.Agency;
import io.jsonwebtoken.io.IOException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/gestion")
public class EventController {
    private final  EventService eventService;
    @PostMapping(path="event")
    public Agency addEvent(@RequestParam("name") String name,
                           @RequestParam("agency_id") String agency_id,
                           @RequestParam("location") String location,
                           @RequestParam("capacity") String capacity,
                           @RequestParam("ticket_price") String ticket_price,
                           @RequestParam("image") MultipartFile file,
                           @RequestParam("category") String category,
                           @RequestParam("description") String description,
                           @RequestParam("date") String date,
                           @RequestParam("time") String time ,
                           @RequestParam("duration") String duration
    )
    { DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        LocalDate parsedDate = LocalDate.parse(date, formatter);

        EventRequest request = EventRequest.builder()
                .name(name)
                .image(file)
                .date(parsedDate)
                .category(category)
                .time(LocalTime.parse(time))
                .duration(duration)
                .description(description)
                .location(location)
                .capacity(Integer.valueOf(capacity))
                .ticket_price(Integer.valueOf(ticket_price))
                .build();
         return   eventService.Add(Integer.valueOf(agency_id),request);
    }
    @DeleteMapping(path = "event/{id}")
    public  void deleteEvent(@PathVariable  Integer id)  {
        eventService.Delete(id);
    }

    @GetMapping("/event/image/{fileName}")
    public ResponseEntity<?> downloadImageFromFileSystem(@PathVariable String fileName) throws IOException {
        byte[] imageData= eventService.downloadImageFromFileSystem(fileName);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/png"))
                .body(imageData);
    }
    @PutMapping(path = "event")
    public Event updateEvent(@RequestBody EventRequest request)
    {
        return  eventService.Update(request);
    }
    @GetMapping("event")
    public List<EventWithAgency> GetAllEvents()
    {
            return  eventService.GetALL();
    }
    @GetMapping("eventproche")
    public List<EventWithAgency> GetEventsPlusProche()
    {
            return  eventService.GetPlusProche();
    }
    @GetMapping(path = "event/{id}")
    public  EventWithAgency getAgency(@PathVariable  Integer id)  {
        return eventService.getEvent(id);
    }
    @PutMapping(path = "event/image")
    public void updateLogo( @RequestParam("image") MultipartFile file,@RequestParam("id") String id)
    {
        eventService.updateImageToFileSystem(file,Integer.parseInt(id));
    }
}
