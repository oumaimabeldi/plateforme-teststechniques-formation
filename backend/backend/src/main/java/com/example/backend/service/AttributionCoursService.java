package com.example.backend.service;

import com.example.backend.entity.AttributionCours;
import com.example.backend.entity.Cours;
import com.example.backend.repository.AttributionCoursRepository;
import com.example.backend.repository.CoursRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AttributionCoursService {
    private final AttributionCoursRepository repo;
    private final CoursRepository coursRepository;

    public AttributionCoursService(AttributionCoursRepository repo, CoursRepository coursRepository) {
        this.repo = repo;
        this.coursRepository = coursRepository;
    }

    public AttributionCours assignCours(Long coursId, Long collaborateurId) {
        if (repo.existsByCoursIdAndCollaborateurId(coursId, collaborateurId)) {
            throw new RuntimeException("Déjà attribué");
        }
        Cours c = coursRepository.findById(coursId).orElseThrow(() -> new RuntimeException("Cours non trouvé"));
        AttributionCours a = AttributionCours.builder()
                .cours(c)
                .collaborateurId(collaborateurId)
                .progression(0.0)
                .build();
        return repo.save(a);
    }

    public List<AttributionCours> getByCollaborateur(Long collaborateurId) {
        return repo.findByCollaborateurId(collaborateurId);
    }

    public void markComplete(Long attributionId) {
        AttributionCours a = repo.findById(attributionId).orElseThrow(() -> new RuntimeException("Attribution non trouvé"));
        a.setTermine(true);
        a.setProgression(100.0);
        repo.save(a);
    }
}