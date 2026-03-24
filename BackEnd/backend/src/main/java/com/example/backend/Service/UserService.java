package com.example.backend.Service;

import com.example.backend.Entity.User;
import com.example.backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository repo;

    public List<User> getAll(){
        return repo.findAll();
    }

    public User findByName(String name){
        return repo.findByName(name);
    }

    public User findByEmail(String email){
        return repo.findByEmail(email);
    }

    public Boolean existsByEmail(String email){
        return repo.existsByEmail(email);
    }

    public User save(User u){
        return repo.save(u);
    }
}
