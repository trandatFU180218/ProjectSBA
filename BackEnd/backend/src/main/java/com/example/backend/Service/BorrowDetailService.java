package com.example.backend.Service;

import com.example.backend.Entity.BorrowDetail;
import com.example.backend.Repository.BorrowDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class BorrowDetailService {
    @Autowired
    private BorrowDetailRepository borrowDetailRepo;
    public List<BorrowDetail> getMyBooks(Long userId){
        return borrowDetailRepo.findByBorrowUserIdAndReturnDateIsNull(userId);
    }


}
