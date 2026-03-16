package com.example.backend.Controller;

import com.example.backend.DTO.BookDTO;
import com.example.backend.Entity.Book;
import com.example.backend.Repository.BookRepository;
import com.example.backend.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {
    @Autowired
    private BookService service;

    @Autowired
    private BookRepository repo;

    @GetMapping
    public List<BookDTO> getAll(Pageable pageable){
        return service.getAll(pageable);
    }

    @GetMapping("/{id}")
    public Book findById(@PathVariable Long id){
        return service.findById(id).orElse(null);
    }

    @GetMapping("/category/{id}")
    public List<Book> getTopBooksByCategory(@PathVariable Long id,
                                            @RequestParam int page,
                                            @RequestParam int size){

        Pageable pageable = PageRequest.of(page,size);

        return repo.getByCategoryId(id, pageable);
    }

    @GetMapping("/search")
    public List<BookDTO> searchBooks(
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) Long categoryId
    ){
        return service.searchBooks(keyword, categoryId);
    }

//    @GetMapping("/top10")
//    public List<Book> get10Book(){
//        return repo.getTop10Books();
//    }
}
