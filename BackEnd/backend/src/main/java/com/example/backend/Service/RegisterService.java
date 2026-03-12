package com.example.backend.Service;

import com.example.backend.DTO.RegisterDTO;
import com.example.backend.Entity.User;
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

    public void register(RegisterDTO reg){

        User user = new User();
        user.setEmail(reg.getEmail());
        user.setPassword(passwordEncoder.encode(reg.getPassword()));
        user.setName(reg.getName());
        user.setPhone(reg.getPhone());
        user.setCreatedAt(new Date());
        user.setRole_id(1L);
        user.setStatus("1");

        uService.save(user);
    }
}
