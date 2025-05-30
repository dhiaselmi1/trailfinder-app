package com.example.Back.partner;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AddRequest {
    private String name;
    private String description;
    private   String  category;
    private MultipartFile logo;
    private  String email;
    private String phone_number;
}
