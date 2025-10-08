package com.example.backend.dto;

import com.example.backend.entity.Qcm;
import lombok.Data;

import java.util.List;

@Data
public class QcmDto {
    private Long id;
    private String titre;
    private List<QuestionDto> questions;

    public static QcmDto fromEntity(Qcm qcm) {
        QcmDto dto = new QcmDto();
        dto.setId(qcm.getId());
        dto.setTitre(qcm.getTitre());
        dto.setQuestions(
                qcm.getQuestions().stream()
                        .map(QuestionDto::fromEntity)
                        .toList()
        );
        return dto;
    }
}
