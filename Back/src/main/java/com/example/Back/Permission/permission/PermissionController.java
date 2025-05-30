package com.example.Back.Permission.permission;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/gestion")
public class PermissionController {
private final PermissionService permissionService;
    @PostMapping(path="permission" )
   public Permission addPermission (    @RequestBody
                                        PermissionRequest permissionRequest)
   {
       return permissionService.add(permissionRequest);
   }
    @DeleteMapping(path = "permission/{id}")
    public  void deletePermission(@PathVariable  Integer id)  {
        permissionService.delete(id);
    }
    @GetMapping(path="permission")
    public List<Permission> GetAllPermissions()
    {return permissionService.getAll();
    }
    @GetMapping(path = "permission/{id}")
    public Permission getPermission(@PathVariable  Integer id)  {
        return permissionService.getById(id);
    }
}
