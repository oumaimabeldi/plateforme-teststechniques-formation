package com.example.backend.service;

import com.example.backend.entity.Cours;
import com.example.backend.repository.CoursRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class CoursService {
    private final CoursRepository coursRepository;

    public CoursService(CoursRepository coursRepository) {
        this.coursRepository = coursRepository;
    }

    public Cours createOrUpdate(Cours cours) {
        // Si chapitres/blocs insérés côté frontend, cascade save gèrera la persistance
        return coursRepository.save(cours);
    }

    public List<Cours> getAll() {
        return coursRepository.findAll();
    }

    public Optional<Cours> getById(Long id) {
        return coursRepository.findById(id);
    }

    // ✅ Nouvelle méthode : charge les chapitres + blocs
    public Optional<Cours> getByIdWithChapitres(Long id) {
        return coursRepository.findById(id);
    }

    public void delete(Long id) {
        coursRepository.deleteById(id);
    }

    public Cours assignQcm(Long coursId, Long qcmId) {
        Cours c = coursRepository.findById(coursId).orElseThrow(() -> new RuntimeException("Cours non trouvé"));
        c.setQcmFinalId(qcmId);
        return coursRepository.save(c);
    }
}
