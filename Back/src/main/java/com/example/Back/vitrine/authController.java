package com.example.Back.vitrine;

import com.example.Back.Auth.AuthenticationService;
import com.example.Back.Auth.LoginRequest;
import com.example.Back.User.User;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/vitrine/auth")
public class authController {
    private final authService authService;
    @PostMapping("login")
    public Map<String, Object> authenticate(
            @RequestBody LoginRequest loginRequest
    ) {
        return authService.authenticate(loginRequest);
    }  @PostMapping("register")
    public User Register(@RequestBody UserReg userReg) {
        return authService.register(userReg);
    }

}
