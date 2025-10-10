package com.example.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

    @GetMapping("/")
    public String home() {
        return "Bienvenue sur le backend de la plateforme ! 🚀";
    }

    @GetMapping("/health")
    public String health() {
        return "✅ Backend is running and connected to PostgreSQL!";
    }
}