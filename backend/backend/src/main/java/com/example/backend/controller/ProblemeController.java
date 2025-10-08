package com.example.backend.controller;
import com.example.backend.entity.Probleme;
import com.example.backend.repository.ProblemeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/problemes")

public class ProblemeController {

    @Autowired
    private ProblemeRepository problemeRepository;

    @PostMapping("/create")
    public ResponseEntity<Probleme> createProbleme(@RequestBody Probleme probleme) {
        Probleme saved = problemeRepository.save(probleme);
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/all")
    public List<Probleme> getAllProblemes() {
        return problemeRepository.findAll();
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteProbleme(@PathVariable Long id) {
        problemeRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}