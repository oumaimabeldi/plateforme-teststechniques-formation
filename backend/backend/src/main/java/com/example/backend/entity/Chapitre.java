package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Chapitre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titre;

    private Integer position;

    @ManyToOne
    @JoinColumn(name = "cours_id")
    private Cours cours;

    // 🔹 Les blocs apparaîtront dans le JSON (plus de boucle infinie)
    @OneToMany(mappedBy = "chapitre", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("position asc")
    private List<BlocContenu> blocs = new ArrayList<>();
}
