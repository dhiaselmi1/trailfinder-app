package com.example.Back.Permission.permission_role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PermissionRoleRequest {

    private Integer permission_id;
    private Integer role_id;
}
