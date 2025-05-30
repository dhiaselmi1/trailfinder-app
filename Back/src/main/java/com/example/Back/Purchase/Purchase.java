package com.example.Back.Purchase;

import com.example.Back.Event.Event;
import com.example.Back.Product.Product;
import com.example.Back.Reservation.CleReservation;
import com.example.Back.User.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@IdClass(ClePurchase.class)
@Builder
public class Purchase {
    private int quantity;
    private float amount;
    @Id
    private LocalDate purchase_date;
;
    @Id
    private LocalTime purchase_time;

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonBackReference
    @Id
    private User user ;
    @ManyToOne(fetch = FetchType.EAGER)
    @JsonBackReference
    @Id
    private Product product ;
}
