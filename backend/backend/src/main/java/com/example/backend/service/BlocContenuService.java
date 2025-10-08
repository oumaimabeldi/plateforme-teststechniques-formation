package com.example.backend.service;

import com.example.backend.entity.BlocContenu;
import com.example.backend.entity.Chapitre;
import com.example.backend.repository.BlocContenuRepository;
import com.example.backend.repository.ChapitreRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class BlocContenuService {
    private final BlocContenuRepository blocRepo;
    private final ChapitreRepository chapitreRepository;

    public BlocContenuService(BlocContenuRepository blocRepo, ChapitreRepository chapitreRepository) {
        this.blocRepo = blocRepo;
        this.chapitreRepository = chapitreRepository;
    }

    public BlocContenu addBlocToChapitre(Long chapitreId, BlocContenu bloc) {
        Chapitre ch = chapitreRepository.findById(chapitreId).orElseThrow(() -> new RuntimeException("Chapitre non trouvé"));
        bloc.setChapitre(ch);
        return blocRepo.save(bloc);
    }

    public List<BlocContenu> getBlocsByChapitre(Long chapitreId) {
        return blocRepo.findByChapitreIdOrderByPosition(chapitreId);
    }

    public void deleteBloc(Long id) {
        blocRepo.deleteById(id);
    }
}
