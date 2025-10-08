package com.example.backend.service;

import com.example.backend.entity.Probleme;
import com.example.backend.repository.ProblemeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProblemeService {

    @Autowired
    private ProblemeRepository problemeRepository;

    public Probleme createProbleme(Probleme probleme) {
        return problemeRepository.save(probleme);
    }

    public List<Probleme> getAllProblemes() {
        return problemeRepository.findAll();
    }

    public Probleme getProblemeById(Long id) {
        return problemeRepository.findById(id).orElse(null);
    }


}
