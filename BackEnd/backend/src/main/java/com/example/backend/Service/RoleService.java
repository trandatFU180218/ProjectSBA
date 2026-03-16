package com.example.backend.Service;

import com.example.backend.Entity.Role;
import com.example.backend.Repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleService {
    @Autowired
    private RoleRepository repo;

    public Role getById(Long id){
        return repo.getById(id);
    }
}
