package com.example.backend.Repository;

import com.example.backend.Entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BookRepository extends JpaRepository<Book,Long> {

    List<Book> findBooksByCategoryId(Long category_id);
}
