package com.example.backend.dto;

import com.example.backend.entity.Question;
import lombok.Data;

import java.util.List;

@Data
public class QuestionDto {
    private Long id;
    private String enonce;
    private List<String> options;

    public static QuestionDto fromEntity(Question question) {
        QuestionDto dto = new QuestionDto();
        dto.setId(question.getId());
        dto.setEnonce(question.getEnonce());
        dto.setOptions(question.getOptions());
        return dto;
    }
}
