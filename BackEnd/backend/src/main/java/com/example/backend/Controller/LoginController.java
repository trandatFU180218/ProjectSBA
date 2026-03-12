package com.example.backend.Controller;

import com.example.backend.DTO.LoginRequestDTO;
import com.example.backend.DTO.RegisterDTO;
import com.example.backend.Entity.User;
import com.example.backend.Service.RegisterService;
import com.example.backend.Service.UserService;
import com.example.backend.security.JwtUtil;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Objects;

@RestController
//@RequestMapping("/deltabook")
public class LoginController {
    @Autowired
    private UserService service;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private RegisterService reService;

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody LoginRequestDTO request) {

        User user = service
                .findByName(request.getName());

        if (user == null) {
            throw new RuntimeException("User not found");
        }

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Wrong password");
        }

//        String token = jwtUtil.generateToken(
//                user.getName(),
//                user.getRoll_id()
//        );

        return Map.of(
                "username", user.getName(),
                "role", user.getRole_id()
        );
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterDTO register) {

        if(service.existsByEmail(register.getEmail())){
            return ResponseEntity
                    .badRequest()
                    .body("Email đã tồn tại");
        }

        reService.register(register);

        return ResponseEntity.ok("Register success!");
    }

}
