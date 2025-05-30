package com.example.Back.Permission.permission_role;

import com.example.Back.Role.Role;
import com.example.Back.Role.RoleRepo;
import com.example.Back.Permission.permission.Permission;
import com.example.Back.Permission.permission.PermissionRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PermissionRoleService {
    private final PermissionRoleRepo permissionRoleRepo;
    private final PermissionRepo permissionRepo;
    private final RoleRepo roleRepo;
    public Permission add(PermissionRoleRequest permissionRoleRequest)
    {
        Permission p = permissionRepo.findById(permissionRoleRequest
                .getPermission_id()).get();
        Role r = roleRepo.findById(permissionRoleRequest
                .getRole_id()).get();
        PermissionRole pr = PermissionRole.builder()
                .permission(p)
                .role(r)
                .build();
        permissionRoleRepo.save(pr);
        return pr.getPermission() ;
    }
    public List<PermissionRoleRequest> getAll() {

        List<PermissionRoleRequest> permissionRoles = new ArrayList<>();

        // Récupérer toutes les entrées de la base de données
        List<PermissionRole> allPermissionRoles = permissionRoleRepo.findAll();


        for (PermissionRole permissionRole : allPermissionRoles) {
            PermissionRoleRequest newPermissionRole = new PermissionRoleRequest();
            newPermissionRole.setRole_id(permissionRole.getRole().getId());
            newPermissionRole.setPermission_id(permissionRole.getPermission().getId());
            permissionRoles.add(newPermissionRole);
        }
        return permissionRoles;
    }

    public List<PermissionRole>  getByPermission(Integer id)
    {
        Permission p = permissionRepo.findById(id).get();
        return permissionRoleRepo.findByPermission(p);
    }
    public List<String>  getByRole(Integer id)
    {
        List<String> permissionRoles = permissionRoleRepo.findPermissionTitlesByRoleId(id);

        return permissionRoles;
    }
    public void delete (PermissionRoleRequest permissionRoleRequest)
    {
        Permission p = permissionRepo.findById(permissionRoleRequest
                .getPermission_id()).get();
        Role r = roleRepo.findById(permissionRoleRequest
                .getRole_id()).get();
        PermissionRole pr = new PermissionRole(r,p);
        permissionRoleRepo.delete(pr);
    }
    public Boolean findPermissionRoleByIds(Integer roleId, Integer permissionId) {
        Optional<PermissionRole> optionalPermissionRole = permissionRoleRepo.findByRoleIdAndPermissionId(roleId, permissionId);

        if (optionalPermissionRole.isPresent()) {
            return true;
        } else {
            return false;

        }
    }
}
