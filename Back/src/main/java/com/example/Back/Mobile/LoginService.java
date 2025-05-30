package com.example.Back.Mobile;

import com.example.Back.Admin.Admin;
import com.example.Back.Agence.Agency;
import com.example.Back.Agence.AgencyRepo;
import com.example.Back.Auth.LoginRequest;
import com.example.Back.Config.SecurityConfig.JWTService;
import com.example.Back.Role.RoleRepo;
import com.example.Back.User.User;
import com.example.Back.User.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class LoginService {
    private final JWTService jwtService;

    private final UserRepo userRepo;

    private final AuthenticationManager authenticationManager;
    public Map<String, Object> authenticate(LoginRequest loginRequest) {
        Map<String, Object> response = new HashMap<>();

        String jwtToken;
     authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getLogin(), loginRequest.getPassword())
        );


        User user = userRepo.findByEmail(loginRequest.getLogin()).get();

            jwtToken = jwtService.generateToken(user);

            response.put("user", user);
            response.put("token", jwtToken);

        return response;

    }

}
