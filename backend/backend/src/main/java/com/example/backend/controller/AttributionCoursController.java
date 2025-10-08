package com.example.backend.controller;

import com.example.backend.entity.AttributionCours;
import com.example.backend.service.AttributionCoursService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/attribution-cours")
@CrossOrigin(origins = "*")
public class AttributionCoursController {
    private final AttributionCoursService service;

    public AttributionCoursController(AttributionCoursService service) {
        this.service = service;
    }

    @PostMapping("/assign/{coursId}/{collaborateurId}")
    public AttributionCours assign(@PathVariable Long coursId, @PathVariable Long collaborateurId) {
        return service.assignCours(coursId, collaborateurId);
    }

    @GetMapping("/collaborateur/{collaborateurId}")
    public List<AttributionCours> getByCollaborateur(@PathVariable Long collaborateurId) {
        return service.getByCollaborateur(collaborateurId);
    }

    @PutMapping("/terminer/{id}")
    public void terminer(@PathVariable Long id) {
        service.markComplete(id);
    }
}