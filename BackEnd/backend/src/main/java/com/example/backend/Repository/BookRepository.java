package com.example.backend.Repository;

import com.example.backend.Entity.Book;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {

    List<Book> findBooksByCategoryId(Long category_id);

    List<Book> getByCategoryId(Long id, Pageable pageable);

//    List<Book> getTop10Books();

    @Query("""
    SELECT b FROM Book b
    WHERE 
    (:keyword IS NULL OR LOWER(b.title) LIKE LOWER(CONCAT('%', :keyword, '%')))
    AND (:categoryId IS NULL OR b.category.id = :categoryId)
    """)
    List<Book> searchBooks(
            @Param("keyword") String keyword,
            @Param("categoryId") Long categoryId
    );
}
