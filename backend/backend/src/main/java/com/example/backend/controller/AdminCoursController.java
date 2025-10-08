package com.example.backend.controller;

import com.example.backend.entity.Cours;
import com.example.backend.service.CoursService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/cours")
@CrossOrigin(origins = "*")
public class AdminCoursController {
    private final CoursService coursService;

    public AdminCoursController(CoursService coursService) {
        this.coursService = coursService;
    }

    @PostMapping("/create")
    public Cours createCours(@RequestBody Cours cours) {
        return coursService.createOrUpdate(cours);
    }

    @GetMapping("/all")
    public List<Cours> getAll() {
        return coursService.getAll();
    }

    @GetMapping("/{id}")
    public Cours getById(@PathVariable Long id) {
        return coursService.getByIdWithChapitres(id)
                .orElseThrow(() -> new RuntimeException("Cours non trouvé"));
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id) {
        coursService.delete(id);
    }

    @PostMapping("/assign-qcm/{coursId}/{qcmId}")
    public Cours assignQcm(@PathVariable Long coursId, @PathVariable Long qcmId) {
        return coursService.assignQcm(coursId, qcmId);
    }
}