package com.example.backend.Repository;

import com.example.backend.Entity.BorrowDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BorrowDetailRepository extends JpaRepository<BorrowDetail,Long> {
}
