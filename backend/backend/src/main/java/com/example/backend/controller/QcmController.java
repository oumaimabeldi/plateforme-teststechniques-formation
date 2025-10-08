package com.example.backend.controller;

import com.example.backend.entity.Attribution;
import com.example.backend.entity.Qcm;
import com.example.backend.repository.AttributionRepository;
import com.example.backend.service.QcmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin/qcm")
@CrossOrigin(origins = "http://localhost:4200")
public class QcmController {

    @Autowired
    private QcmService qcmService;

    @Autowired
    private AttributionRepository attributionRepository;

    @PostMapping("/create")
    public ResponseEntity<Map<String, Object>> createQcm(@RequestBody Qcm qcm) {
        Qcm saved = qcmService.createQcm(qcm);
        Map<String, Object> res = new HashMap<>();
        res.put("id", saved.getId());
        res.put("titre", saved.getTitre());
        res.put("questionsCount", saved.getQuestions() != null ? saved.getQuestions().size() : 0);
        return ResponseEntity.ok(res);
    }


    @GetMapping("/all")
    public ResponseEntity<List<Qcm>> getAllQcm() {
        return ResponseEntity.ok(qcmService.getAllQcm());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String, String>> deleteQcm(@PathVariable Long id) {
        qcmService.deleteQcm(id);
        Map<String, String> response = new HashMap<>();
        response.put("message", "QCM supprimé avec succès");
        return ResponseEntity.ok(response);
    }


}
