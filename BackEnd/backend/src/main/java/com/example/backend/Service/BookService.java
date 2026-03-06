package com.example.backend.Service;

import com.example.backend.Entity.Book;
import com.example.backend.Entity.Category;
import com.example.backend.Repository.BookRepository;
import com.example.backend.Repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    @Autowired
    private BookRepository repo;

    @Autowired
    private CategoryRepository caterepo;

    public List<Book> getAll(){
        return repo.findAll();
    }

    public List<Book> getByCategoryName(String name){
        Category cate = caterepo.findByName(name).orElseThrow(() -> new RuntimeException("Category not found"));
        return repo.findBooksByCategoryId(cate.getId());
    }

    public Optional<Book> findById(Long id){
        return repo.findById(id);
    }
}
