package com.example.Back.Permission.permission;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PermissionRepo extends JpaRepository<Permission,Integer> {

    Optional<Permission> findByTitle(String title);
}
