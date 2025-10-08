package com.example.backend.controller;

import com.example.backend.dto.QcmDto;
import com.example.backend.entity.*;
import com.example.backend.repository.AttributionRepository;
import com.example.backend.repository.QcmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/candidat/qcm")
@CrossOrigin(origins = "http://localhost:4200")
public class QcmCandidatController {

    @Autowired
    private QcmRepository qcmRepository;
    @Autowired
    private AttributionRepository attributionRepository;


    @GetMapping("/{qcmId}")
    public ResponseEntity<QcmDto> getQcm(
            @PathVariable Long qcmId,
            @AuthenticationPrincipal User user) {

        Attribution attribution = attributionRepository.findByUserIdAndQcmId(user.getId(), qcmId)
                .orElseThrow(() -> new RuntimeException("QCM non attribué"));

        Qcm qcm = attribution.getQcm();

        QcmDto dto = QcmDto.fromEntity(qcm);
        return ResponseEntity.ok(dto);
    }


    @PostMapping("/submit")
    public ResponseEntity<?> submitQcm(
            @RequestBody QcmSubmission submission,
            @AuthenticationPrincipal User user) {

        Attribution attribution = attributionRepository.findByUserIdAndQcmId(user.getId(), submission.getQcmId())
                .orElseThrow(() -> new RuntimeException("QCM non attribué"));

        if (attribution.isCompleted()) {
            return ResponseEntity.badRequest().body("QCM déjà complété");
        }

        Qcm qcm = attribution.getQcm();
        int score = 0;

        for (int i = 0; i < qcm.getQuestions().size(); i++) {
            Question question = qcm.getQuestions().get(i);
            int userAnswer = submission.getAnswers().get(i);

            if (userAnswer == question.getBonneReponse()) {
                score++;
            }
        }


        attribution.setScore(score);
        attribution.setCompleted(true);
        attribution.setCompletedAt(LocalDateTime.now());
        attributionRepository.save(attribution);

        return ResponseEntity.ok("QCM terminé. Score = " + score + "/" + qcm.getQuestions().size());
    }
}