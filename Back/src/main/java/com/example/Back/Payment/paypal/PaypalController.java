package com.example.Back.Payment.paypal;

import com.paypal.api.payments.Links;
import com.paypal.api.payments.Payment;
import com.paypal.base.rest.PayPalRESTException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/payment")
@CrossOrigin(origins = "http://localhost:4200")
public class PaypalController {
    private final PaypalService paypalService;

   @PostMapping("create")

   public ResponseEntity<String> createPayment(@RequestBody PaymentRequest paymentRequest) {
       try {
           Payment payment = paypalService.createPayment(
                   Double.valueOf(paymentRequest.getAmount()),
                   "USD",
                   "paypal",
                   "sale",
                   paymentRequest.getDescription(),
                   "http://localhost:4200", // URL d'annulation temporaire
                   "http://localhost:4200/success"  // URL de succès temporaire
           );

           for (Links links: payment.getLinks()) {
               if (links.getRel().equals("approval_url")) {
                   return ResponseEntity.ok(links.getHref());
               }
           }
       } catch (PayPalRESTException e) {

       }
       return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error during payment creation");
   }
    @GetMapping("/payment/success")
    public ResponseEntity<?> paymentSuccess(
            @RequestParam("paymentId") String paymentId,
            @RequestParam("PayerID") String payerId
    ) {
        try {
            Payment payment = paypalService.executePayment(paymentId, payerId);
            if (payment.getState().equals("approved")) {
                return ResponseEntity.ok("Payment successful");
            }
        } catch (PayPalRESTException e) {

        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error during payment execution");
    }
}
