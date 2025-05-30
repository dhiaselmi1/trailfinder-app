package com.example.Back.Role;

import com.example.Back.Admin.Admin;
import com.example.Back.Agence.Agency;

import com.example.Back.Permission.permission_role.PermissionRole;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
public class Role {
    @Id
    @GeneratedValue
    private Integer id;
    private String name;
    private String description;
    private boolean isRemovable;
    @OneToMany(mappedBy = "role", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<PermissionRole> PermissionRoles;
    @OneToMany(mappedBy = "role",cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Agency> agencies = new ArrayList<>();
    @OneToMany(mappedBy = "role",cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Admin> admin = new ArrayList<>();
}
