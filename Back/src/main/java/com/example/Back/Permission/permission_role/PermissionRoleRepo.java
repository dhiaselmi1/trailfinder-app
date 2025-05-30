package com.example.Back.Permission.permission_role;

import com.example.Back.Role.Role;
import com.example.Back.Permission.permission.Permission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface PermissionRoleRepo extends JpaRepository<PermissionRole,Integer> {
    List<PermissionRole> findByRole(Role role);
    List<PermissionRole> findByPermission(Permission permission);

    Optional<PermissionRole> findByRoleIdAndPermissionId(Integer roleId, Integer permissionId);
    @Query("SELECT pr.permission.title FROM PermissionRole pr WHERE pr.role.id = :role_id")
    List<String> findPermissionTitlesByRoleId(@Param("role_id") Integer role_id);
}
