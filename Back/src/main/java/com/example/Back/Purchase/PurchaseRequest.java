package com.example.Back.Purchase;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PurchaseRequest {
    private int quantity;
    private  Integer product_id;
    private Integer user_id;
    private float amount;
}
