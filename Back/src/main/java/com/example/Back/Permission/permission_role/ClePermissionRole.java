package com.example.Back.Permission.permission_role;

import com.example.Back.Role.Role;
import com.example.Back.Permission.permission.Permission;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClePermissionRole implements Serializable {
    private Role role;
    private Permission permission;
}
