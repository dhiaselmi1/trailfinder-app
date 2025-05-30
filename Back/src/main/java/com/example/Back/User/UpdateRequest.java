package com.example.Back.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UpdateRequest {
    private Integer id ;
    private String email;
    private String password;
    private String first_name;
    private String last_name;
    private String phone_number;
    private String country;
}
