package com.example.backend.Service;

import com.example.backend.DTO.RegisterDTO;
import com.example.backend.Entity.Role;
import com.example.backend.Entity.User;
import com.example.backend.Repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class RegisterService {
    @Autowired
    private UserService uService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RoleRepository roleRepository;

    public void register(RegisterDTO reg){

        Role role = roleRepository.findById(3l).orElseThrow();

        User user = new User();
        user.setEmail(reg.getEmail());
        user.setPassword(passwordEncoder.encode(reg.getPassword()));
        user.setName(reg.getName());
        user.setPhone(reg.getPhone());
        user.setCreatedAt(new Date());
        user.setRole(role);
        user.setStatus("1");

        uService.save(user);
    }
}
