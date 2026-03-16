package com.example.backend.Service;

import com.example.backend.DTO.BookDTO;
import com.example.backend.Entity.Book;
import com.example.backend.Entity.Category;
import com.example.backend.Repository.BookRepository;
import com.example.backend.Repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    @Autowired
    private BookRepository repo;

    @Autowired
    private CategoryRepository caterepo;

    public List<BookDTO> getAll(Pageable pageable) {

        Page<Book> page = repo.findAll(pageable);

        List<Book> books = page.getContent();

        return books.stream().map(book -> {
            BookDTO dto = new BookDTO();
            dto.setId(book.getId());
            dto.setTitle(book.getTitle());
            dto.setAuthor(book.getAuthor());
            dto.setImageUrl(book.getImageUrl());
            dto.setCategoryName(book.getCategory().getName());
            return dto;
        }).toList();
    }

    public List<BookDTO> searchBooks(String keyword, Long categoryId) {

        List<Book> books = repo.searchBooks(keyword, categoryId);

        return books.stream().map(book -> {
            BookDTO dto = new BookDTO();
            dto.setId(book.getId());
            dto.setTitle(book.getTitle());
            dto.setAuthor(book.getAuthor());
            dto.setImageUrl(book.getImageUrl());
            dto.setCategoryName(book.getCategory().getName());
            return dto;
        }).toList();
    }


    public List<Book> getByCategoryName(String name) {
        Category cate = caterepo.findByName(name).orElseThrow(() -> new RuntimeException("Category not found"));
        return repo.findBooksByCategoryId(cate.getId());
    }


    public Optional<Book> findById(Long id) {
        return repo.findById(id);
    }
}
