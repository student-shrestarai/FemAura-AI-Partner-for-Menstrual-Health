package com.example.demo.Service;

import java.time.temporal.ChronoUnit;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.example.demo.Entity.FemInput;
import com.example.demo.Repository.InputRepo;
import java.time.LocalDate;

@Service
public class InputService {

    @Autowired
    private InputRepo input_repo;

    @Autowired
    private WebClient webClient;

    @Autowired
    private ReportService makereport;

    public String saveDataAndGenerateReport(FemInput data) {

        String email = data.getuserEmail();

        // 1️⃣ Fetch last cycle for this user
        FemInput lastEntry =
                input_repo.findTopByUserEmailOrderByStartDateDesc(email);


        LocalDate nextPeriod = null;
        // 2️⃣ Calculate cycle length
        if (lastEntry != null) {
            long days = ChronoUnit.DAYS.between(
                    lastEntry.getStartDate(),
                    data.getStartDate()
            );
            data.setCycleLength((int) days);
            nextPeriod = data.getStartDate().plusDays(days);
        } else {
            data.setCycleLength(null); // first entry
        }

        // 3️⃣ Save input
        FemInput savedData = input_repo.save(data);

        // 4️⃣ Call AI model
        String aiPrediction = callPythonAI(savedData);

        // 5️⃣ Generate FULL report text
        String report = createHealthReport(savedData, aiPrediction,nextPeriod);

        // 6️⃣ Save report in DB (IMPORTANT FIX)
        makereport.saveHealthReport(email, savedData, report);

        // 7️⃣ Return report to frontend
        return report;
    }

    private String callPythonAI(FemInput data) {
        try {
            return webClient.post()
                .uri("http://127.0.0.1:8000/predict")
                .header("Content-Type", "application/json")
                .bodyValue(Map.of(
                        "sleepHours", data.getSleepHours(),
                        "stress", data.getStress(),
                        "symptoms", data.getSymptoms(),
                        "cycleLength", data.getCycleLength()
                ))
                .retrieve()
                .bodyToMono(Map.class)
                .block()
                .get("prediction")
                .toString();

        } catch (Exception e) {
            e.printStackTrace();
            return "AI server unavailable";
        }
    }

    private String createHealthReport(FemInput data, String aiPrediction, LocalDate nextPeriod) {
        return String.format(
            "===== FemAura Health Report =====\n\n" +
            "Period Start: %s\n" +
            "Period End: %s\n" +
            "Sleep Hours: %d hrs\n" +
            "Stress Level: %s\n" +
            "Symptoms: %s\n" +
            "Expected Next Period: %s\n" +
            "--- AI Insights ---\n" +
            "%s\n",
            data.getStartDate(),
            data.getEndDate(),
            data.getSleepHours(),
            data.getStress(),
            data.getSymptoms(),
            nextPeriod,
            aiPrediction
        );
    }
}
