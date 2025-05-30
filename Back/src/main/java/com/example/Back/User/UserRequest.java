package com.example.Back.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserRequest {
    private Integer id ;
    private String email;
    private String password;
    private String first_name;
    private String last_name;
    private String phone_number;
    private String country;
    private MultipartFile photo;
    private Integer role_id;
}
