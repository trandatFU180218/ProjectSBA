package com.example.backend.Entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "BorrowRecords")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BorrowRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Temporal(TemporalType.DATE)
    private Date borrow_date;

    @Temporal(TemporalType.DATE)
    private Date return_date;

    @Temporal(TemporalType.DATE)
    private Date due_date;

    private String status;

    private Long user_id;

}