package com.example.backend.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "BorrowDetails")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BorrowDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "borrow_id")
    private BorrowRecord borrow;

    @ManyToOne
    @JoinColumn(name = "copy_id")
    private BookCopy copy ;

    @Column(name = "return_date")
    private Date returnDate;
}