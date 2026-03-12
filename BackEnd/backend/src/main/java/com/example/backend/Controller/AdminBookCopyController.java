package com.example.backend.Controller;

import com.example.backend.Entity.BookCopy;
import com.example.backend.Repository.BookCopyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin-bookCopy")
public class AdminBookCopyController {
    @Autowired
    private BookCopyRepository bookCopyRepository;

    @GetMapping
    public List<BookCopy> getAllCopies(){
        return bookCopyRepository.findAll();
    }

    @PostMapping
    public BookCopy addCopy(@RequestBody BookCopy copy){
        return bookCopyRepository.save(copy);
    }

    @DeleteMapping("/{id}")
    public String deleteCopy(@PathVariable Long id){

        bookCopyRepository.deleteById(id);

        return "Copy deleted";
    }
}
