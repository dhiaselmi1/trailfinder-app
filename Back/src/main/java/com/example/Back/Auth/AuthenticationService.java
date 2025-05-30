package com.example.Back.Auth;

import com.example.Back.Admin.Admin;
import com.example.Back.Admin.AdminRepo;
import com.example.Back.Agence.Agency;
import com.example.Back.Agence.AgencyRepo;
import com.example.Back.Agence.Email.EmailService;
import com.example.Back.Agence.Email.EmailTemplateName;
import com.example.Back.Agence.Token.Token;
import com.example.Back.Agence.Token.TokenRepo;
import com.example.Back.Role.Role;
import com.example.Back.Role.RoleRepo;
import com.example.Back.Permission.permission_role.PermissionRoleService;
import com.example.Back.User.User;
import com.example.Back.User.UserRepo;
import com.example.Back.Config.SecurityConfig.JWTService;
import jakarta.mail.MessagingException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final AuthenticationManager authenticationManager;
    private final AgencyRepo agencyRepo;
    private final AdminRepo adminRepo;
    private final JWTService jwtService;
    private final EmailService emailService;
    private final RoleRepo roleRepo;
    private final UserRepo userRepo;
    private final PermissionRoleService permissionRoleService;
    private final PasswordEncoder passwordEncoder;
    private final TokenRepo tokenRepo;

    @Value("${application.mailing.frontend.activation-url}")
    private String activationUrl;

    Agency register(RegistrationRequest request)  {
        Optional<Agency> a = agencyRepo.findByAgency(request.getAgency());
        if (a.isPresent())
            throw new IllegalStateException("Une agence avec le même nom existe déjà.");
        request.setPassword(encode(request.getPassword()));
        Role r = roleRepo.findById(2).get();
        var agency = Agency.builder()
                .agency(request.getAgency())
                .representative(request.getRepresentative())
                .email(request.getEmail())
                .phone_number(request.getPhone_number())
                .password(request.getPassword())
                .role(r)
                .build();
        agencyRepo.save(agency);

        return agency;
    }
    public Map<String, Object> authenticate(LoginRequest loginRequest) {
        Map<String, Object> response = new HashMap<>();
        String role;
        String jwtToken;
        List<String> permissions;
          authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                       loginRequest.getLogin(), loginRequest.getPassword())
        );
   if( adminRepo.findByLogin(loginRequest.getLogin()).isPresent())
    {
        Admin user = adminRepo.findByLogin(loginRequest.getLogin()).get();
        role= user.getRole().getName();
         jwtToken = jwtService.generateToken(user);
        permissions = permissionRoleService.getByRole(user.getRole().getId());
        response.put("user", user);
     } else if ( agencyRepo.findByAgency(loginRequest.getLogin()).isPresent())
     {
Agency user = agencyRepo.findByAgency(loginRequest.getLogin()).get();
       role= user.getRole().getName();
        jwtToken = jwtService.generateToken(user);
       permissions = permissionRoleService.getByRole(user.getRole().getId());
       response.put("user", user);
       response.put("id",user.getId());
     }
   else {
       User user = userRepo.findByEmail(loginRequest.getLogin()).get();
       role= user.getRole().getName();
       if( user.getRole().getId() == 3)
           throw new IllegalStateException("Données invalides ");
       jwtToken = jwtService.generateToken(user);
       permissions = permissionRoleService.getByRole(user.getRole().getId());
       response.put("user", user);
   }

        response.put("role", role);
        response.put("token", jwtToken);
        response.put("permissions", permissions);

return response;

    }
    public String encode(String a)
    {
        return  passwordEncoder.encode(a);

    }
    public String generateAndSaveActivationToken(Agency agency) {
        String generatedToken = generateActivationCode(6);
        var token = Token.builder()
                .token(generatedToken)
                .createdAt(LocalDateTime.now())
                .expiresAt(LocalDateTime.now().plusDays(1))
                .agency(agency)
                .build();
        tokenRepo.save(token);

        return generatedToken;
    }
    public String generateAndSaveActivationToken(String email) {
        String generatedToken = generateActivationCode(6);
        if(agencyRepo.findByEmail(email).isPresent())
        {
            var token = Token.builder()
                    .token(generatedToken)
                    .createdAt(LocalDateTime.now())
                    .expiresAt(LocalDateTime.now().plusDays(1))
                    .agency(agencyRepo.findByEmail(email).get())
                    .build();
            tokenRepo.save(token);
        } else if ( userRepo.findByEmail(email).isPresent()) {
            var token = Token.builder()
                    .token(generatedToken)
                    .user(userRepo.findByEmail(email).get())
                    .build();
            tokenRepo.save(token);
        }
        else {
            throw new IllegalStateException("Aucun utilisateur avec cet email");
        }
        return generatedToken;
    }
    public void sendValidationEmail(Agency agency) throws MessagingException {
        var newToken = generateAndSaveActivationToken(agency);
        emailService.sendEmail(
               agency.getEmail(),
             agency.getRepresentative(),
                EmailTemplateName.ACTIVATE_ACCOUNT,
               activationUrl,
               newToken,
              "Account activation");
   }
   public void sendCodeEmail(String email) throws MessagingException {
        var newToken = generateAndSaveActivationToken(email);
        if(agencyRepo.findByEmail(email).isPresent())
        {  Agency a = agencyRepo.findByEmail(email).get();
            emailService.sendEmail(
                    email,
                    a.getRepresentative(),
                    EmailTemplateName.FORGET_password,
                    activationUrl,
                    newToken,
                    "Security Code");
        }
         else  {
            User u = userRepo.findByEmail(email).get();
        emailService.sendEmail(
                email,
               u.getFirst_name()+u.getLast_name(),
                EmailTemplateName.FORGET_password,
                activationUrl,
                newToken,
                "Security Code");
        }


   }
   public String generateActivationCode(int length) {
        String characters = "0123456789";
        StringBuilder codeBuilder = new StringBuilder();

        SecureRandom secureRandom = new SecureRandom();

        for (int i = 0; i < length; i++) {
            int randomIndex = secureRandom.nextInt(characters.length());
            codeBuilder.append(characters.charAt(randomIndex));
        }

        return codeBuilder.toString();
    }
    public void approve(Integer id) throws MessagingException
    {
        Agency a = agencyRepo.findById(id).get();
        a.setApproved(true);
        agencyRepo.save(a);
        sendValidationEmail(a);
    }
    @Transactional
    public void activateAccount(String token) throws MessagingException {
        Token savedToken = tokenRepo.findByToken(token)
                .orElseThrow(() -> new RuntimeException("Invalid token"));
        if (LocalDateTime.now().isAfter(savedToken.getExpiresAt())) {
            sendValidationEmail(savedToken.getAgency());
            throw new RuntimeException("Activation token has expired. A new token has been send to the same email address");
        }

        var user = agencyRepo.findById(savedToken.getAgency().getId())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        user.setEnabled(true);
        agencyRepo.save(user);

        savedToken.setValidatedAt(LocalDateTime.now());
        tokenRepo.save(savedToken);
    }
    @Transactional
    public void changePassword( ChangePasswordRequest request)
    {request.setPassword(encode(request.getPassword()));
        Token savedToken = tokenRepo.findByToken(request.getToken())
                .orElseThrow(() -> new RuntimeException("Invalid token"));
        if(agencyRepo.findByEmail(request.getEmail()).isPresent())
        {
            Agency a = agencyRepo.findByEmail(request.getEmail()).get();
                a.setPassword(request.getPassword());
                agencyRepo.save(a);
        }
        else
        {
            User u = userRepo.findByEmail(request.getEmail()).get();
            u.setPassword(request.getPassword());
            userRepo.save(u);
        }
        tokenRepo.deleteById(savedToken.getId());
    }
}


