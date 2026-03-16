package com.example.backend.Repository;

import com.example.backend.Entity.BookCopy;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BookCopyRepository extends JpaRepository<BookCopy,Long> {
    List<BookCopy> findByBookId(Long bookId);

    Optional<BookCopy> findFirstByBookIdAndStatus(Long bookId, String status);
}
