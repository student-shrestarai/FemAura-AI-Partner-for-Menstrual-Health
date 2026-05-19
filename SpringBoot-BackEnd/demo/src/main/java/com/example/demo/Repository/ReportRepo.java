package com.example.demo.Repository;
import org.springframework.data.repository.CrudRepository;
import com.example.demo.Entity.Reports;
import java.util.List;

public interface ReportRepo extends CrudRepository<Reports , Long> {

    List<Reports>findByUserEmailOrderByGeneratedAtDesc(String UserEmail);
    
}
