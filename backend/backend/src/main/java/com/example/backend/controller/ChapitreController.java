package com.example.backend.controller;

import com.example.backend.entity.Chapitre;
import com.example.backend.service.ChapitreService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/chapitre")
@CrossOrigin(origins = "*")
public class ChapitreController {
    private final ChapitreService chapitreService;

    public ChapitreController(ChapitreService chapitreService) {
        this.chapitreService = chapitreService;
    }

    @PostMapping("/add/{coursId}")
    public Chapitre addChapitre(@PathVariable Long coursId, @RequestBody Chapitre chapitre) {
        return chapitreService.addChapitreToCours(coursId, chapitre);
    }
    @GetMapping("/cours/{coursId}")
    public List<Chapitre> getChapitres(@PathVariable Long coursId) {
        return chapitreService.getChapitresByCours(coursId);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id) {
        chapitreService.deleteChapitre(id);
    }
}