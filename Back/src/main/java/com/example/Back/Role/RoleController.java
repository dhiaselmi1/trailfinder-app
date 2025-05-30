package com.example.Back.Role;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/gestion")
public class RoleController {
    private final RoleService roleService;
    @PostMapping(path="role")
    public Role addRole (@RequestBody RoleRequest roleRequest)
    {
        return roleService.add(roleRequest);
    }
    @DeleteMapping(path = "role/{id}")
    public  void deleteRole(@PathVariable  Integer id)  {
        roleService.delete(id);
    }
    @GetMapping(path="role")
    public List<Role> GetAllRoles()
    {return roleService.getAll();
    }
    @GetMapping(path = "role/{id}")
    public Role getRole(@PathVariable  Integer id)  {
        return roleService.getById(id);
    }
}
