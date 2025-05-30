package com.example.Back.Agence.gestion;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AddRequest  {
    private Integer id ;
    private  String representative;
    private String agency;
    private  String email;
    private String phone_number;
    private  String password;
    private MultipartFile file;
    private String activity;
    private String country;
    private String description;
}