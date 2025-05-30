package com.example.Back.Purchase;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/gestion")
public class PurchaseController {
    private final PurchaseService purchaseService;
    @PostMapping(path ="purchase" )
    public void addPurchases( @RequestBody List<PurchaseRequest> requests)
    {
         purchaseService.addPurchase(requests);
         return;
    }
    @GetMapping(path ="purchase" )
    public List<Purchase> getAll()
    {
        return purchaseService.getAllPurchases();
    }

}
