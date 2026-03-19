package com.example.backend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data

@Entity
@Table(name = "Fines")
public class Fine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "borrow_id")
    private BorrowDetail borrowDetail;

    @Column(name = "late_days")
    private Integer lateDays;

    @Column(name = "fine_amount")
    private int fineAmount;

    @Column(name = "paid")
    private Boolean paid;

    @Column(name = "created_at")
    private Date createdAt;
}
