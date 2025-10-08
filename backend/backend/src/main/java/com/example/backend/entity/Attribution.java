package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "attributions")
public class Attribution {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;


    @ManyToOne
    @JoinColumn(name = "qcm_id", nullable = true)
    private Qcm qcm;

    @ManyToOne
    @JoinColumn(name = "probleme_id", nullable = true)
    private Probleme probleme;


    private boolean completed = false;


    private Integer score;


    @Lob
    private String solutionCode;


    private LocalDateTime assignedAt = LocalDateTime.now();
    private LocalDateTime completedAt;

    private LocalDateTime deadline;

}
