package com.example.backend.Repository;

import com.example.backend.Entity.BorrowRecord;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BorrowRecordRepository extends JpaRepository<BorrowRecord,Long> {
}
