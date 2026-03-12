package com.example.backend.Controller;

import com.example.backend.Entity.Fine;
import com.example.backend.Repository.FineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin-fine")
public class AdminFineController {
    @Autowired
    private FineRepository fineRepository;

    @GetMapping
    public List<Fine> getAllFines(){
        return fineRepository.findAll();
    }

    @PutMapping("/{id}/pay")
    public Fine payFine(@PathVariable Long id){

        Fine fine = fineRepository.findById(id).orElseThrow();

        fine.setPaid(true);

        return fineRepository.save(fine);
    }
}
