package com.example.backend.Controller;


import com.example.backend.Entity.BorrowRecord;
import com.example.backend.Entity.Fine;
import com.example.backend.Repository.BorrowRecordRepository;
import com.example.backend.Repository.FineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/fine")
public class FineController {
    @Autowired
    private FineRepository fineRepo;

    @Autowired
    private BorrowRecordRepository borrowRepo;

    @GetMapping("/user/{id}")
    public List<Fine> findByUserId(@PathVariable Long id){
        return fineRepo.findByBorrowDetail_Borrow_User_Id(id);
    }

    @GetMapping("/all-fines")
    public List<Fine> getAllFines() {
        return fineRepo.findAll();
    }

    @PutMapping("/pay/{id}")
    public Fine UpdatePaidById(@PathVariable Long id){
        Fine f = fineRepo.findById(id).orElseThrow();
        f.setPaid(true);
        return fineRepo.save(f);
    }
}
    