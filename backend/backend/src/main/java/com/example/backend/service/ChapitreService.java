package com.example.backend.service;

import com.example.backend.entity.Chapitre;
import com.example.backend.entity.Cours;
import com.example.backend.repository.ChapitreRepository;
import com.example.backend.repository.CoursRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ChapitreService {
    private final ChapitreRepository chapitreRepository;
    private final CoursRepository coursRepository;

    public ChapitreService(ChapitreRepository chapitreRepository, CoursRepository coursRepository) {
        this.chapitreRepository = chapitreRepository;
        this.coursRepository = coursRepository;
    }

    public Chapitre addChapitreToCours(Long coursId, Chapitre chapitre) {
        Cours cours = coursRepository.findById(coursId).orElseThrow(() -> new RuntimeException("Cours non trouvé"));
        chapitre.setCours(cours);
        // position should be set by frontend or computed here
        return chapitreRepository.save(chapitre);
    }

    public List<Chapitre> getChapitresByCours(Long coursId) {
        return chapitreRepository.findByCoursIdOrderByPosition(coursId);
    }

    public void deleteChapitre(Long id) {
        chapitreRepository.deleteById(id);
    }
}
