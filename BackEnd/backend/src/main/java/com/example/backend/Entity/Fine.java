package com.example.backend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
@AllArgsConstructor
@NoArgsConstructor
@Data

@Entity
@Table(name = "Fines")
public class Fine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "borrow_id", nullable = false)
    private Long borrowId;

    @Column(name = "late_days")
    private Integer lateDays;

    @Column(name = "fine_amount")
    private Double fineAmount;

    @Column(name = "paid")
    private Boolean paid;

    @Column(name = "created_at")
    private LocalDateTime createdAt;
}
