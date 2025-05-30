package com.example.Back.partner;

import com.example.Back.Image.Image;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
public class Partner {
    @Id
    @GeneratedValue
    private Integer id;
    private String name;
    private String description;
    private String logo;
    private   String  category;
    private  String email;
    private String phone_number;
    @OneToMany(mappedBy = "partner", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Image> images;
}
