package com.example.Back.Event;

import com.example.Back.Agence.Agency;
import com.example.Back.Agence.AgencyRepo;
import com.example.Back.User.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EventService {
    private final EventRepo eventRepo;
    private final AgencyRepo agencyRepo;

    private static final String UPLOAD_DIR = "./src/main/resources/images/event";

    public void Delete(Integer id) {
        eventRepo.deleteById(id);

    }

    public Agency Add(Integer agenceId, EventRequest e) {

        Optional<Agency> a = agencyRepo.findById(agenceId);
        if (!a.isPresent()) {
            // Gérez l'exception ici (par exemple, en lançant une exception personnalisée)
            throw new IllegalStateException("Pas d'agence avec cette id : " + agenceId);
        }

        Event event = Event.builder()
                .name(e.getName())
                .category(e.getCategory())
                .location(e.getLocation())
                .capacity(e.getCapacity())
                .ticket_price(e.getTicket_price())
                .currency("DT")
                .date(e.getDate())
                .time(e.getTime())
                .duration(e.getDuration())
                .description(e.getDescription())
                .poster(uploadImageToFileSystem(e.getImage()))
                .agency(a.get())
                .build();

        eventRepo.save(event);
        // Pas besoin de sauvegarder l'agence ici
        return a.get();
    }

    public Event Update(EventRequest e) {
        Optional<Event> event = eventRepo.findByName(e.getName());

        if (event.isPresent()) {
            event.get().setName(e.getName());
            event.get().setTime(e.getTime());
            event.get().setDate(e.getDate());
            event.get().setDuration(e.getDuration());
            event.get().setLocation(e.getLocation());
            event.get().setCapacity(e.getCapacity());
            event.get().setCategory(e.getCategory());
            event.get().setTicket_price(e.getTicket_price());
            event.get().setDescription(e.getDescription());
            eventRepo.save(event.get());

            return event.get();
        }
        throw new IllegalStateException("pas d'evenement  avec cet id");
    }

    public List<EventWithAgency> GetALL() {
        List<Event> events = eventRepo.findAll();
        List<EventWithAgency> e = new ArrayList<>();

        for (Event event : events) {
            Integer idAgency = event.getAgency().getId();
            e.add(new EventWithAgency(event, idAgency));
        }
return e;
    }


    public String uploadImageToFileSystem(MultipartFile file) {
        String filePath = UPLOAD_DIR + "/" + file.getOriginalFilename();


        try {
            file.transferTo(new File(filePath));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }


        return file.getOriginalFilename();
    }

    public byte[] downloadImageFromFileSystem(String fileName) {

        String filePath=UPLOAD_DIR+ "/"+fileName;
        byte[] images = new byte[0];
        try {
            images = Files.readAllBytes(new File(filePath).toPath());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return images;
    }
    public EventWithAgency getEvent(Integer id) {

        Optional<Event> optionalEvent = eventRepo.findById(id);
        if (optionalEvent.isPresent()) {
            Event event = optionalEvent.get();
            Integer idAgency = event.getAgency().getId(); // Récupérer l'ID de l'agence
            return new EventWithAgency(event, idAgency);
        } else {
            return null;
        }
    }
    public void updateImageToFileSystem(MultipartFile file,Integer id)
    {
        Event e =  eventRepo.findById(id).get();
        e.setPoster(uploadImageToFileSystem(file));
        eventRepo.save(e);

    }
        public List<EventWithAgency> GetPlusProche() {
        List<Event> events = eventRepo.findAll();
        List<EventWithAgency> e = new ArrayList<>();

        // Trier les événements par date
        events.sort(Comparator.comparing(Event::getDate));

        // Obtenir la date actuelle
        LocalDate now = LocalDate.now();

        // Filtrer les événements à venir et limiter le résultat à 8
        events = events.stream()
                .filter(event -> event.getDate().isAfter(now))
                .limit(8)
                .collect(Collectors.toList());

        for (Event event : events) {
            Integer idAgency = event.getAgency().getId();
            e.add(new EventWithAgency(event, idAgency));
        }

        return e;
    }
}