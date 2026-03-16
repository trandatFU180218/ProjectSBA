package com.example.backend.Service;

import com.example.backend.DTO.MyBookDTO;
import com.example.backend.Entity.BookCopy;
import com.example.backend.Entity.BorrowDetail;
import com.example.backend.Entity.BorrowRecord;
import com.example.backend.Entity.Fine;
import com.example.backend.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
public class BorrowService {

    @Autowired
    private BookCopyRepository bookCopyRepo;

    @Autowired
    private BorrowRecordRepository borrowRecordRepo;

    @Autowired
    private BorrowDetailRepository borrowDetailRepo;

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private FineRepository fineRepository;

    @Transactional
    public String borrowBook(Long userId, Long bookId) {

        BookCopy copy = bookCopyRepo
                .findFirstByBookIdAndStatus(bookId, "AVAILABLE")
                .orElseThrow(() -> new RuntimeException("No copies available"));

        BorrowRecord record = new BorrowRecord();
        record.setUser(userRepo.findById(userId).orElseThrow());
        record.setBorrow_date(new Date());

        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.DAY_OF_MONTH, 14);
        record.setDue_date(cal.getTime());

        borrowRecordRepo.save(record);

        BorrowDetail detail = new BorrowDetail();
        detail.setBorrow(record);
        detail.setCopy(copy);

        borrowDetailRepo.save(detail);

        copy.setStatus("BORROWED");
        bookCopyRepo.save(copy);

        return "Borrow success";
    }

    public List<MyBookDTO> getMyBooks(Long userId){

        List<BorrowDetail> details =
                borrowDetailRepo.findByBorrowUserIdAndReturnDateIsNull(userId);

        return details.stream().map(d -> {

            MyBookDTO dto = new MyBookDTO();

            dto.setBorrowDetailId(d.getId());

            dto.setBarcode(d.getCopy().getBarcode());

            dto.setTitle(d.getCopy().getBook().getTitle());
            dto.setAuthor(d.getCopy().getBook().getAuthor());

            dto.setBorrowDate(d.getBorrow().getBorrow_date());
            dto.setDueDate(d.getBorrow().getDue_date());

            return dto;

        }).toList();
    }

    @Transactional
    public String returnBook(Long borrowDetailId){

        BorrowDetail detail = borrowDetailRepo
                .findById(borrowDetailId)
                .orElseThrow();

        Date today = new Date();

        detail.setReturnDate(today);

        BorrowRecord record = detail.getBorrow();

        Date dueDate = record.getDue_date();

        long diff = today.getTime() - dueDate.getTime();

        if(diff > 0){

            long lateDays = diff / (1000 * 60 * 60 * 24);

            Integer fineAmount = (int) lateDays * 20000;

            Fine fine = new Fine();
            fine.setBorrow(record);
            fine.setLateDays((int) lateDays);
            fine.setFineAmount(fineAmount);
            fine.setPaid(false);
            fine.setCreatedAt(new Date());

            fineRepository.save(fine);
        }

        BookCopy copy = detail.getCopy();
        copy.setStatus("AVAILABLE");

        borrowDetailRepo.save(detail);
        bookCopyRepo.save(copy);

        return "Return success";
    }

}
