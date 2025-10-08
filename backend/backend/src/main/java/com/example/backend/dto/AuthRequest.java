package com.example.backend.dto;

import jakarta.persistence.Entity;
import lombok.Data;

@Data

public class AuthRequest {
    private String email;
    private String password;
}
