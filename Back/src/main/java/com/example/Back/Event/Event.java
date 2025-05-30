package com.example.Back.Event;

import com.example.Back.Agence.Agency;
import com.example.Back.Image.Image;
import com.example.Back.Reservation.Reservation;
import com.example.Back.feedback.Feedback;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
public class Event {
@Id
@GeneratedValue
private Integer id;

private String name;
private LocalDate date ;
private LocalTime time;
private String duration;
private String location;
private  int capacity;
private int ticket_price ;
private String currency;
private   String  category;
private String description;
private String poster;
private String localisation;
@OneToMany(mappedBy = "event", cascade = CascadeType.ALL)
@JsonManagedReference
        private List<Reservation> reservations;
@OneToMany(mappedBy = "event", cascade = CascadeType.ALL)
@JsonManagedReference
        private List<Feedback> feedbacks;
@ManyToOne // Relation many-to-one avec Agence
@JoinColumn(name = "agency_id") // Nom de la clé étrangère dans la table Event
@JsonBackReference
private Agency agency;
@OneToMany(mappedBy = "event", cascade = CascadeType.ALL)
@JsonManagedReference
private List<Image> images;



}
