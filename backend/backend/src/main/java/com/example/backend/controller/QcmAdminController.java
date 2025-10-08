package com.example.backend.controller;

import com.example.backend.entity.Attribution;
import com.example.backend.repository.AttributionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/admin/qcm")
public class QcmAdminController {

    @Autowired
    private AttributionRepository attributionRepository;

    @GetMapping("/results/{qcmId}")
    public List<Attribution> getResults(@PathVariable Long qcmId) {
        return attributionRepository.findByQcmId(qcmId);
    }
}
