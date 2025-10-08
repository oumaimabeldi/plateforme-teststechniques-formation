package com.example.backend.service;

import com.example.backend.entity.Attribution;
import com.example.backend.entity.Probleme;
import com.example.backend.entity.Qcm;
import com.example.backend.entity.User;
import com.example.backend.repository.AttributionRepository;
import com.example.backend.repository.ProblemeRepository;
import com.example.backend.repository.QcmRepository;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class AttributionService {

    @Autowired
    private AttributionRepository attributionRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private QcmRepository qcmRepository;

    @Autowired
    private ProblemeRepository problemeRepository;

    public void assignTests(Long userId, List<Long> qcmIds, List<Long> problemeIds, Integer durationMinutes) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));

        LocalDateTime assignedAt = LocalDateTime.now();
        LocalDateTime deadline = (durationMinutes != null) ? assignedAt.plusMinutes(durationMinutes) : null;

        // Attribution QCMs
        for (Long qcmId : qcmIds) {
            Qcm qcm = qcmRepository.findById(qcmId)
                    .orElseThrow(() -> new RuntimeException("QCM non trouvé: " + qcmId));
            Attribution attr = new Attribution();
            attr.setUser(user);
            attr.setQcm(qcm);
            attr.setProbleme(null);
            attr.setAssignedAt(assignedAt);
            attr.setDeadline(deadline);
            attr.setCompleted(false);
            attributionRepository.save(attr);
        }

        // Attribution Problèmes
        for (Long problemeId : problemeIds) {
            Probleme probleme = problemeRepository.findById(problemeId)
                    .orElseThrow(() -> new RuntimeException("Problème non trouvé: " + problemeId));
            Attribution attr = new Attribution();
            attr.setUser(user);
            attr.setQcm(null);
            attr.setProbleme(probleme);
            attr.setAssignedAt(assignedAt);
            attr.setDeadline(deadline);
            attr.setCompleted(false);
            attributionRepository.save(attr);
        }
    }

    public List<Attribution> getAssignmentsByUser(Long userId) {
        return attributionRepository.findByUserId(userId);
    }

    public List<Attribution> getAllAssignments() {
        return attributionRepository.findAll();
    }

    public void deleteAssignment(Long id) {
        attributionRepository.deleteById(id);
    }

}
