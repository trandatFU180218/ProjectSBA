package com.example.backend.Controller;

import com.example.backend.Entity.Role;
import com.example.backend.Entity.User;
import com.example.backend.Repository.RoleRepository;
import com.example.backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/admin/user")
public class AdminUserController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping
    public User createUser(@RequestBody User user) {

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @PutMapping("/{id}/ban")
    public User banUser(@PathVariable Long id) {

        User user = userRepository.findById(id).orElseThrow();

        user.setStatus("BANNED");

        return userRepository.save(user);
    }

    @PutMapping("/{id}/activate")
    public User activateUser(@PathVariable Long id) {

        User user = userRepository.findById(id).orElseThrow();

        user.setStatus("ACTIVE");

        return userRepository.save(user);
    }

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
        return "User deleted";
    }

    @Autowired
    private RoleRepository roleRepository;

    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User updatedUser) {

        User user = userRepository.findById(id).orElseThrow();


        user.setName(updatedUser.getName());
        user.setEmail(updatedUser.getEmail());
        user.setPhone(updatedUser.getPhone());
        user.setStatus(updatedUser.getStatus());

        if (updatedUser.getRole() != null && updatedUser.getRole().getId() != null) {
            Role role = roleRepository
                    .findById(updatedUser.getRole().getId())
                    .orElseThrow();

            user.setRole(role);
        }

        return userRepository.save(user);
    }

    @GetMapping("/{id}")
    public Optional<User> findById(@PathVariable Long id) {
        return userRepository.findById(id);
    }
}
