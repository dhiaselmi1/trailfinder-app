package com.example.Back.Mobile;

import com.example.Back.Auth.LoginRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/userAuth")
public class LoginController {
    private final LoginService loginService;
   @PostMapping(path = "log")
    public Map<String, Object> authenticate(@RequestBody LoginRequest loginRequest) {
       return loginService.authenticate(loginRequest);
    }
}
