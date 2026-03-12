package com.example.backend.Controller;

import com.example.backend.Entity.User;
import com.example.backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin-user")
public class AdminUserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @PutMapping("/{id}/ban")
    public User banUser(@PathVariable Long id){

        User user = userRepository.findById(id).orElseThrow();

        user.setStatus("BANNED");

        return userRepository.save(user);
    }

    @PutMapping("/{id}/activate")
    public User activateUser(@PathVariable Long id){

        User user = userRepository.findById(id).orElseThrow();

        user.setStatus("ACTIVE");

        return userRepository.save(user);
    }
}
