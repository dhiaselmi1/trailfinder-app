package com.example.Back.Purchase;

import com.example.Back.Product.Product;
import com.example.Back.Product.ProductRepo;
import com.example.Back.Reservation.Reservation;
import com.example.Back.Reservation.ReservationResponse;
import com.example.Back.User.User;
import com.example.Back.User.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PurchaseService {
    private final PurchaseRepo purchaseRepo;
    private final UserRepo userRepo;
private final  ProductRepo productRepo;
    public List<Purchase> getAllPurchases()
    {

        return purchaseRepo.findAll();
    }
    public void addPurchase(List<PurchaseRequest> requests) {
        List<Purchase> purchases = new ArrayList<>();
        for (PurchaseRequest request : requests) {
            Optional<User> u = userRepo.findById(request.getUser_id());
            if (u.isEmpty()) {
                throw new IllegalStateException("Pas d'utilisateur avec cet ID");
            }
            Optional<Product> product = productRepo.findById(request.getProduct_id());
            if (product.isEmpty()) { // Correction de la condition pour vérifier le produit
                throw new IllegalStateException("Pas de produit avec cet ID");
            }

            LocalTime tempsReservation = LocalTime.now();
            LocalDate dateReservation = LocalDate.now();
            Purchase p = Purchase.builder()
                    .user(u.get())
                    .product(product.get())
                    .quantity(request.getQuantity())
                    .purchase_date(dateReservation)
                    .purchase_time(tempsReservation)
                    .amount(request.getAmount())
                    .build();
            purchaseRepo.save(p);
            purchases.add(p);
        }
        return ;
    }

}
