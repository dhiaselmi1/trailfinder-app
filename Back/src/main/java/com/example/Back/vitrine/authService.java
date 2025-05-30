package com.example.Back.vitrine;


import com.example.Back.Admin.AdminRepo;
import com.example.Back.Agence.AgencyRepo;
import com.example.Back.Agence.Token.TokenRepo;
import com.example.Back.Auth.LoginRequest;
import com.example.Back.Config.SecurityConfig.JWTService;
import com.example.Back.Permission.permission_role.PermissionRoleService;
import com.example.Back.Role.Role;
import com.example.Back.Role.RoleRepo;
import com.example.Back.User.User;
import com.example.Back.User.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class authService {
    private final AuthenticationManager authenticationManager;
    private final AgencyRepo agencyRepo;
    private final AdminRepo adminRepo;
    private final JWTService jwtService;
    private final RoleRepo roleRepo;
    private final UserRepo userRepo;
    private final PermissionRoleService permissionRoleService;
    private final PasswordEncoder passwordEncoder;
    private final TokenRepo tokenRepo;

    public Map<String, Object> authenticate(LoginRequest loginRequest) {
        Map<String, Object> response = new HashMap<>();
        String role;
        String jwtToken;
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getLogin(), loginRequest.getPassword())
        );

            User user = userRepo.findByEmail(loginRequest.getLogin()).get();
            role= user.getRole().getName();
            if( user.getRole().getId() != 3)
                throw new IllegalStateException("Données invalides ");

            response.put("user", user);
        response.put("role", role);


        return response;

    }
    public String encode(String a)
    {
        return  passwordEncoder.encode(a);

    }
    User register(UserReg request)  {
        Optional<User> u = userRepo.findByEmail(request.getEmail());
        if (u.isPresent())
            throw new IllegalStateException("Une agence avec le même nom existe déjà.");
        request.setPassword(encode(request.getPassword()));
        Role r = roleRepo.findById(3).get();
        var user = User.builder()
                .email(request.getEmail())
                .first_name(request.getFirst_name())
                .last_name(request.getLast_name())
                .phone_number(request.getPhone_number())
                .password(request.getPassword())
                .role(r)
                .build();
        userRepo.save(user);

        return user;
    }

}
