package com.example.Back.Role;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RoleService {
    private final RoleRepo roleRepo;
    public Role add(RoleRequest roleRequest)
    {

        Role r =Role.builder()
                .name(roleRequest.getName())
                .description(roleRequest.getDescription())
                .isRemovable(roleRequest.isRemovable())
                .build();
        roleRepo.save(r);

         return  r ;
    }
    public void delete(Integer id)
    {
        if(roleRepo.findById(id).get().isRemovable())
        roleRepo.deleteById(id);
        else
           throw new IllegalStateException("Ce role ne peut pas être supprimer");
            }
    public List<Role> getAll()
    {
       return  roleRepo.findAll();
    }

    public Role getById(Integer id)
    {
        return  roleRepo.findById(id).get();
    }
}
