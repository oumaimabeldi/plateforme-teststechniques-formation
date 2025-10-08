package com.example.backend.controller;


import com.example.backend.entity.Attribution;
import com.example.backend.entity.Probleme;
import com.example.backend.repository.AttributionRepository;
import com.example.backend.repository.ProblemeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/candidat/probleme")
public class ProblemeCandidatController {

    @Autowired
    private ProblemeRepository problemeRepository;

    @Autowired
    private AttributionRepository attributionRepository;


    @GetMapping("/{problemeId}")
    public ResponseEntity<Probleme> getProbleme(@PathVariable Long problemeId) {
        Optional<Probleme> probleme = problemeRepository.findById(problemeId);
        return probleme.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }


    @PostMapping("/submit/{attributionId}")
    public ResponseEntity<String> submitSolution(
            @PathVariable Long attributionId,
            @RequestBody String code) {

        Optional<Attribution> attributionOpt = attributionRepository.findById(attributionId);

        if (attributionOpt.isPresent()) {
            Attribution attribution = attributionOpt.get();
            attribution.setSolutionCode(code);
            attribution.setCompleted(true);

            attribution.setScore(100);
            attributionRepository.save(attribution);
            return ResponseEntity.ok("Solution soumise avec succès !");
        }

        return ResponseEntity.notFound().build();
    }
}