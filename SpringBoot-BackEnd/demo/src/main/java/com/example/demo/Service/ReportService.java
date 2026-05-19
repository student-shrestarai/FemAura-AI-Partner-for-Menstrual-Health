package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.FemInput;
import com.example.demo.Entity.Reports;
import com.example.demo.Repository.ReportRepo;
import java.time.LocalDateTime;
import java.util.List;


@Service
public class ReportService {


    @Autowired
    private ReportRepo reportrepo;
    public Reports saveHealthReport(String userEmail , FemInput feminput ,  String reportContent )
        {
            Reports report = new Reports();
            report.setUserEmail(userEmail);
            report.setReportContent(reportContent);
            report.setGeneratedAt(LocalDateTime.now());
            report.setFemInput(feminput);
           return  reportrepo.save(report);

            

        }

        public List<Reports> getAllReport(String userEmail){
          return reportrepo.findByUserEmailOrderByGeneratedAtDesc( userEmail);
          

        }

        public Reports getReportById(Long reportId) {
        return reportrepo.findById(reportId)
                .orElseThrow(() -> new RuntimeException("Report not found"));
    }
       
    
}
