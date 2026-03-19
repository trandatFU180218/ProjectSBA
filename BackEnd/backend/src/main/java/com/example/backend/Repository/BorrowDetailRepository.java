package com.example.backend.Repository;

import com.example.backend.Entity.BorrowDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BorrowDetailRepository extends JpaRepository<BorrowDetail,Long> {
    List<BorrowDetail> findByBorrowUserIdAndReturnDateIsNull(Long userId);

    List<BorrowDetail> findByReturnDateIsNull();
}
