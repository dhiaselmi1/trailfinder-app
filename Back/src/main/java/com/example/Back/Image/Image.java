package com.example.Back.Image;

import com.example.Back.Event.Event;
import com.example.Back.partner.Partner;
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
public class Image {
    @Id
    @GeneratedValue
    private Integer id;
    private String image;
    @ManyToOne
    @JoinColumn(name = "partner_id")
    @JsonBackReference
    private Partner partner;
    @ManyToOne
    @JoinColumn(name = "event_id")
    @JsonBackReference
    private Event event;
}
