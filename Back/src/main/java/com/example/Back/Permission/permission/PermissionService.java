package com.example.Back.Permission.permission;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PermissionService {
    private final PermissionRepo permissionRepo;

public Permission add(PermissionRequest  permissionRequest)
{if(permissionRepo.findByTitle(permissionRequest.getTitle()).isPresent())
    throw new IllegalStateException("Cet permission existe  déjà");
  Permission p = Permission.builder()
          .title(permissionRequest.getTitle())
          .description(permissionRequest.getDescription())
          .build();
permissionRepo.save(p);
return p;
}
public void delete(Integer id)
{
    permissionRepo.deleteById(id);

}
public List<Permission> getAll()
{
    return permissionRepo.findAll();
}
    public Permission getById(Integer id)
    {
        return permissionRepo.findById(id).get();
    }
}
