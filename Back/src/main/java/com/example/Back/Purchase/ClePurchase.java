package com.example.Back.Purchase;

import com.example.Back.Event.Event;
import com.example.Back.Product.Product;
import com.example.Back.User.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ClePurchase implements Serializable {
    private Product product;
    private User user;
    private LocalDate purchase_date;
    private LocalTime purchase_time;

}
