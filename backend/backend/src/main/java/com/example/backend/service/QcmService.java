package com.example.backend.service;

import com.example.backend.entity.Qcm;
import com.example.backend.entity.Question;
import com.example.backend.repository.QcmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class QcmService {

    @Autowired
    private QcmRepository qcmRepository;

    public Qcm createQcm(Qcm qcm) {
        if (qcm.getQuestions() != null) {
            for (Question q : qcm.getQuestions()) {
                q.setQcm(qcm);
            }
        }
        return qcmRepository.save(qcm);
    }

    public List<Qcm> getAllQcm() {
        return qcmRepository.findAll();
    }

    public void deleteQcm(Long id) {
        qcmRepository.deleteById(id);
    }
}