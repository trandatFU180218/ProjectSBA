package com.example.backend.Repository;

import com.example.backend.Entity.BorrowRecord;
import com.example.backend.Entity.Fine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FineRepository extends JpaRepository<Fine,Long> {
    @Query("SELECT SUM(f.fineAmount) FROM Fine f")
    Double getTotalFines();

//    Fine getFinesByBorrow(BorrowRecord borrowRecord);

    List<Fine> findByBorrowDetail_Borrow_User_Id(Long userId);

    List<Fine> findByPaidFalse();
}
