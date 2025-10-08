package com.example.backend.repository;

import com.example.backend.entity.AttributionCours;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface AttributionCoursRepository extends JpaRepository<AttributionCours, Long> {
    List<AttributionCours> findByCollaborateurId(Long collaborateurId);
    List<AttributionCours> findByCoursId(Long coursId);
    boolean existsByCoursIdAndCollaborateurId(Long coursId, Long collaborateurId);
}