package com.example.Back.Permission.permission;

import com.example.Back.Permission.permission_role.PermissionRole;
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
public class Permission {
    @Id
    @GeneratedValue
    private Integer id;
    private String title;
    private String description;
    @OneToMany(mappedBy = "permission", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<PermissionRole> PermissionRoles;
}
