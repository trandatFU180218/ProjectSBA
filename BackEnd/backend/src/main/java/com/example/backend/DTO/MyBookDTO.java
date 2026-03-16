package com.example.backend.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class MyBookDTO {
    private Long borrowDetailId;
    private String title;
    private String author;
    private String barcode;
    private Date borrowDate;
    private Date dueDate;
}
