package com.example.backend.controller;

import com.example.backend.entity.Attribution;
import com.example.backend.repository.AttributionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/admin/attributions")
public class ProblemeAdminController {

    @Autowired
    private AttributionRepository attributionRepository;


    @GetMapping("/problemes")
    public List<Attribution> getAllProblemes() {
        return attributionRepository.findAll();
    }


    @GetMapping("/{id}")
    public ResponseEntity<Attribution> getAttribution(@PathVariable Long id) {
        return attributionRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}