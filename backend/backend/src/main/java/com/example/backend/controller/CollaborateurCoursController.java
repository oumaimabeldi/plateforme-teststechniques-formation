package com.example.backend.controller;

import com.example.backend.entity.AttributionCours;
import com.example.backend.entity.Cours;
import com.example.backend.service.AttributionCoursService;
import com.example.backend.service.CoursService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/collaborateur/cours")
@CrossOrigin(origins = "*")
public class CollaborateurCoursController {

    private final AttributionCoursService attributionService;
    private final CoursService coursService;

    public CollaborateurCoursController(AttributionCoursService attributionService, CoursService coursService) {
        this.attributionService = attributionService;
        this.coursService = coursService;
    }

    @GetMapping("/assigned/{collaborateurId}")
    public List<Cours> getAssignedCours(@PathVariable Long collaborateurId) {
        List<AttributionCours> atts = attributionService.getByCollaborateur(collaborateurId);
        return atts.stream().map(AttributionCours::getCours).collect(Collectors.toList());
    }

    @GetMapping("/{coursId}")
    public Cours getCours(@PathVariable Long coursId) {
        return coursService.getById(coursId).orElseThrow(() -> new RuntimeException("Cours non trouvé"));
    }
}