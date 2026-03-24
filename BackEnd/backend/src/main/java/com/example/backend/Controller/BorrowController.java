package com.example.backend.Controller;

import com.example.backend.DTO.MyBookDTO;
import com.example.backend.Entity.BorrowDetail;
import com.example.backend.Entity.User;
import com.example.backend.Repository.BorrowDetailRepository;
import com.example.backend.Repository.UserRepository;
import com.example.backend.Service.BorrowService;
import com.example.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BorrowController {
    @Autowired
    private BorrowService borrowService;

    @Autowired
    private BorrowDetailRepository repo;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/borrow")
    public String borrowBook(@RequestParam Long bookId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null
                || !authentication.isAuthenticated()
                || "anonymousUser".equals(authentication.getName())) {
            throw new RuntimeException("Chưa đăng nhập");
        }


        System.out.println("AUTH NAME: " + authentication.getName());

        String eName = authentication.getName() ;

        User user = userRepository.findByEmail(eName);

        if (user == null) {
            throw new RuntimeException("User không tồn tại");
        }

        Long userId = user.getId();

        return borrowService.borrowBook(userId, bookId);
    }

    @GetMapping("/my-books")
    public List<MyBookDTO> myBooks() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null
                || !authentication.isAuthenticated()
                || "anonymousUser".equals(authentication.getName())) {
            throw new RuntimeException("Chưa đăng nhập");
        }

        String eName = authentication.getName();

        if (eName == null) {
            throw new RuntimeException("User không tồn tại");
        }

        User user = userRepository.findByEmail(eName);

        return borrowService.getMyBooks(user.getId());
    }

    @PostMapping("/admin/return/{borrowDetailId}")
    public String returnBook(@PathVariable Long borrowDetailId){
        return borrowService.returnBook(borrowDetailId);
    }

    @GetMapping("/admin/borrow-not-return")
    public List<BorrowDetail> getAllBorrowNotRefund(){
        return repo.findByReturnDateIsNull();
    }
}
