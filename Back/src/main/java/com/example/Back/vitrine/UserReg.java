package com.example.Back.vitrine;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserReg {
    private String email;
    private String password;
    private String first_name;
    private String last_name;
    private String phone_number;
}
