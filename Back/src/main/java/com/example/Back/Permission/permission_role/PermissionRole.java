package com.example.Back.Permission.permission_role;

import com.example.Back.Role.Role;
import com.example.Back.Permission.permission.Permission;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@IdClass(ClePermissionRole.class)
@Builder
public class PermissionRole {
    @ManyToOne
    @JsonBackReference
    @Id
    Role role ;
    @ManyToOne
    @JsonBackReference
    @Id
    Permission permission ;
    }
