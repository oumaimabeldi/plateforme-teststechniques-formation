package com.example.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Probleme {
    @Id
    @GeneratedValue
    private Long id;
    private String titre;
    private String description;
    private String language;
    private String input;
    private String expectedOutput;

}
