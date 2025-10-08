package com.example.backend.repository;

import com.example.backend.entity.Cours;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CoursRepository extends JpaRepository <Cours, Long>  {
    @EntityGraph(attributePaths = {"chapitres", "chapitres.blocs"})
    Optional<Cours> findById(Long id);
}
