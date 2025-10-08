package com.example.backend;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class TempPasswordGenerator {
    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        System.out.println("collab123 → " + encoder.encode("collab123"));
        System.out.println("candidat123 → " + encoder.encode("candidat123"));
    }
}
