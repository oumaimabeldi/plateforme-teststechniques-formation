package com.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BlocContenu {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer position; // ordre dans le chapitre

    @Enumerated(EnumType.STRING)
    private TypeBloc type; // TEXT, IMAGE, VIDEO

    @Column(length = 20000)
    private String contenu; // texte (HTML) ou URL (image/vidéo)

    @ManyToOne
    @JoinColumn(name = "chapitre_id")
    @JsonIgnore  // ✅ évite la boucle infinie lors de la sérialisation
    private Chapitre chapitre;
}
