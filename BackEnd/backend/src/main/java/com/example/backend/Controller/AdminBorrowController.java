package com.example.backend.Controller;

import com.example.backend.Entity.BorrowRecord;
import com.example.backend.Repository.BorrowRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/admin-borrow")
public class AdminBorrowController {
    @Autowired
    private BorrowRecordRepository borrowRecordRepository;

    @GetMapping
    public List<BorrowRecord> getAllBorrows(){
        return borrowRecordRepository.findAll();
    }


}
