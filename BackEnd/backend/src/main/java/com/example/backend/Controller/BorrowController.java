package com.example.backend.Controller;

import com.example.backend.DTO.MyBookDTO;
import com.example.backend.Entity.BorrowDetail;
import com.example.backend.Service.BorrowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/borrow")
public class BorrowController {
    @Autowired
    private BorrowService borrowService;

    @PostMapping
    public String borrowBook(@RequestParam Long userId,
                             @RequestParam Long bookId) {

        return borrowService.borrowBook(userId, bookId);
    }

    @GetMapping("/my-books/{userId}")
    public List<MyBookDTO> myBooks(@PathVariable Long userId){

        return borrowService.getMyBooks(userId);

    }

    @PostMapping("/return/{borrowDetailId}")
    public String returnBook(@PathVariable Long borrowDetailId){
        return borrowService.returnBook(borrowDetailId);
    }
}
