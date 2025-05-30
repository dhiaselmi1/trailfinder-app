package com.example.Back.Auth;

import com.example.Back.Agence.Agency;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
public class AuthenticationController {
    private final AuthenticationService AuthenticationService;
    @PostMapping("login")
    public Map<String, Object> authenticate(
            @RequestBody LoginRequest loginRequest
    ) {
        return AuthenticationService.authenticate(loginRequest);
    }
    @PostMapping("register")
    public Agency register(
            @RequestBody RegistrationRequest registrationRequest) {
        return  AuthenticationService.register(registrationRequest);
    }
    @PostMapping ("activate-account")
    public void confirm(
            @RequestBody String token
    ) throws MessagingException {
        AuthenticationService.activateAccount(token);
    }
 @PostMapping ("forget-password")
    public void sendCode(
            @RequestBody String email
    ) throws MessagingException {

        AuthenticationService.sendCodeEmail(email);
    } @PutMapping  ("forget-password")
    public void changePassword(
            @RequestBody ChangePasswordRequest request
    ) throws MessagingException {
        AuthenticationService.changePassword(request);
    }

}
