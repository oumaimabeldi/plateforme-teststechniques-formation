package com.example.backend.entity;

import lombok.Data;

import java.util.List;

@Data
public class QcmSubmission {
    private Long qcmId;
    private List<Integer> answers; // chaque index correspond à une question
}