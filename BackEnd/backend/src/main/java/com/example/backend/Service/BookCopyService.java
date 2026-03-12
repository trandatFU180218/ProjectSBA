package com.example.backend.Service;

import com.example.backend.Entity.BookCopy;
import com.example.backend.Repository.BookCopyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookCopyService {

    @Autowired
    private BookCopyRepository repo;

    public List<BookCopy> findByBookId(Long bookId) {
        return repo.findByBookId(bookId);
    }
}
