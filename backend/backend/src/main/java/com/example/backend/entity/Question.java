package com.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String enonce;
    private int bonneReponse;

    @ElementCollection
    private List<String> options;

    @ManyToOne
    @JoinColumn(name = "qcm_id")
    @JsonBackReference
    private Qcm qcm;


}