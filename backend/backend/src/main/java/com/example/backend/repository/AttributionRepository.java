package com.example.backend.repository;

import com.example.backend.entity.Attribution;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AttributionRepository extends JpaRepository<Attribution, Long> {
    List<Attribution> findByUserId(Long userId);
    Optional<Attribution> findByUserIdAndQcmId(Long userId, Long qcmId);
    List<Attribution> findByQcmId(Long qcmId);

}
