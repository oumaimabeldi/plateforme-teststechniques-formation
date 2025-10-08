package com.example.backend.controller;

import com.example.backend.entity.BlocContenu;
import com.example.backend.service.BlocContenuService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/bloc")
@CrossOrigin(origins = "*")
public class BlocContenuController {
    private final BlocContenuService service;

    public BlocContenuController(BlocContenuService service) {
        this.service = service;
    }

    @PostMapping("/add/{chapitreId}")
    public BlocContenu addBloc(@PathVariable Long chapitreId, @RequestBody BlocContenu bloc) {
        return service.addBlocToChapitre(chapitreId, bloc);
    }

    @GetMapping("/chapitre/{chapitreId}")
    public List<BlocContenu> getByChapitre(@PathVariable Long chapitreId) {
        return service.getBlocsByChapitre(chapitreId);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteBloc(id);
    }
}