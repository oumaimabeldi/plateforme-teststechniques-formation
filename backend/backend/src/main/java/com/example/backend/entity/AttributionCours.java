package com.example.backend.entity;


import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AttributionCours {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "cours_id")
    private Cours cours;

    @Column(nullable = false)
    private Long collaborateurId; // id user de ton service user

    private LocalDateTime dateAttribution = LocalDateTime.now();

    private boolean termine = false;
    private Double progression = 0.0; // 0.0 - 100.0
}