package com.example.backend.Controller;

import com.example.backend.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/dash-board")
public class DashBoardController {
    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private BookCopyRepository bookCopyRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BorrowRecordRepository borrowRecordRepository;

    @Autowired
    private FineRepository fineRepository;

    @GetMapping
    public Map<String, Object> getDashboardStats() {

        Map<String, Object> stats = new HashMap<>();

        stats.put("totalBooks", bookRepository.count());
        stats.put("totalCopies", bookCopyRepository.count());
        stats.put("totalUsers", userRepository.count());
        stats.put("borrowedBooks", borrowRecordRepository.countByStatus("BORROWED"));
        stats.put("totalFines", fineRepository.getTotalFines());

        return stats;
    }
}
