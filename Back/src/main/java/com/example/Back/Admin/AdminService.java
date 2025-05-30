package com.example.Back.Admin;

import com.example.Back.Role.Role;
import com.example.Back.Role.RoleRepo;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AdminService  {
    private final AdminRepo adminRepo;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepo roleRepo;
    public void saveAdmin(AdminRequest adminRequest)
    {
        Role r = roleRepo.findById(1).get();
        String encodedPassword =passwordEncoder.encode(adminRequest.getPassword());
        Admin a = Admin.builder()
        .password(encodedPassword)
                .login(adminRequest.getLogin())
                .role(r)
        . build();

        adminRepo.save(a);
    }
}
