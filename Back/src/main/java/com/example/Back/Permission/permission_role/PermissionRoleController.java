package com.example.Back.Permission.permission_role;

import com.example.Back.Permission.permission.Permission;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/gestion")
public class PermissionRoleController {
    private final PermissionRoleService permissionRoleService;
    @PostMapping(path ="permissionRole" )
    public Permission add(@RequestBody PermissionRoleRequest permissionRoleRequest)
    {
        return permissionRoleService.add(permissionRoleRequest);
    }
    @PutMapping(path ="permissionRole" )
    public void delete(@RequestBody PermissionRoleRequest permissionRoleRequest)
    {
         permissionRoleService.delete(permissionRoleRequest);
    }

    @GetMapping(path ="permissionRole" )
    public List<PermissionRoleRequest> GetAll()
    {
        return  permissionRoleService.getAll();
    }
    @GetMapping(path ="permissionRole/{id}" )
    public List<PermissionRole> GetByPermission(@PathVariable  Integer id)
    {
        return  permissionRoleService.getByPermission(id);
    }
    @GetMapping(path ="rolePermission/{id}" )
    public List<String> GetByRole(@PathVariable  Integer id)
    {

        return  permissionRoleService.getByRole(id);
    }
    @PostMapping(path ="rolePermission" )
public boolean isPermissionRolePresent(@RequestBody PermissionRoleRequest permissionRoleRequest)
            {
                return  permissionRoleService.findPermissionRoleByIds(permissionRoleRequest.getPermission_id(), permissionRoleRequest.getRole_id());
            }
}
