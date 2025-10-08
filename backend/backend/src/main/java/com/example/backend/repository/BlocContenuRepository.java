package com.example.backend.repository;

import com.example.backend.entity.BlocContenu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface BlocContenuRepository extends JpaRepository<BlocContenu, Long> {
    List<BlocContenu> findByChapitreIdOrderByPosition(Long chapitreId);
}
