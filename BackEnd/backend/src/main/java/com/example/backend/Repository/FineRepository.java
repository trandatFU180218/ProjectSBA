package com.example.backend.Repository;

import com.example.backend.Entity.Fine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface FineRepository extends JpaRepository<Fine,Long> {
    @Query("SELECT SUM(f.fineAmount) FROM Fine f")
    Double getTotalFines();
}
