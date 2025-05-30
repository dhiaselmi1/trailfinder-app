package com.example.Back.Payment.flouci;

import java.io.IOException;
import java.util.Map;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/payment")
public class PaymentController {
    private final PaymentService paymentService;
    @PostMapping("generate")
    public ModelAndView createPayment(@RequestBody Map<String, String> payload) throws IOException {
        String amount = payload.get("amount");
        ResponsePayment responsePayment = paymentService.generatePayment(amount);
        return new ModelAndView("redirect:" + responsePayment.getLink());
    }
}
