package com.example.backend.controller;

import com.example.backend.entity.Attribution;
import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.AttributionService;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
@Autowired
    private UserService userService;

    @Autowired
    private AttributionService attributionService;

    @Autowired
    private UserRepository userRepository;
//c'est l espace de gestion des candidats
@GetMapping("/candidats")
    public ResponseEntity<List<User>> getCandidats(){
    return ResponseEntity.ok(userService.getCandidats());
}
@PostMapping("/add-candidat")
    public ResponseEntity<?> addCandidat(@RequestBody User user) {
        userService.createCandidat(user);
        return ResponseEntity.ok(Map.of("message", "Candidat créé avec succès"));
    }
    @DeleteMapping("/delete-candidat/{id}")
    public ResponseEntity<?> deleteCandidat(@PathVariable Long id) {
        userService.deleteCandidat(id);
        return ResponseEntity.ok("Candidat supprimé avec succès");
    }
    @PutMapping("/update-candidat/{id}")
    public ResponseEntity<?> updateCandidat(@PathVariable Long id, @RequestBody User updatedUser) {
        userService.updateCandidat(id, updatedUser);
        return ResponseEntity.ok("Candidat mis à jour avec succès");
    }
    @PutMapping("/reset-password/{id}")
    public ResponseEntity<?> resetPassword(@PathVariable Long id) {
        String newPassword = userService.resetPassword(id);
        return ResponseEntity.ok(Map.of("message", "Mot de passe réinitialisé", "newPassword", newPassword));
    }
    //c'est l espace de gestion des collaborateurs
    @GetMapping("/collaborateur")
    public ResponseEntity<List<User>> getollaborateurs(){
        return ResponseEntity.ok(userService.getCollaborateurs());
    }
    @PostMapping("/add-collaborateur")
    public ResponseEntity<?> addollaborateur(@RequestBody User user) {
        userService.createCollaborateur(user);
        return ResponseEntity.ok(Map.of("message", "Collaborateur créé avec succès"));
    }
    @DeleteMapping("/delete-collaborateur/{id}")
    public ResponseEntity<?> deleteCollaborateur(@PathVariable Long id) {
        userService.deleteCollaborateur(id);
        return ResponseEntity.ok("Collaborateur supprimé avec succès");
    }
    @PutMapping("/update-collaborateur/{id}")
    public ResponseEntity<?> updateCollaborateur(@PathVariable Long id, @RequestBody User updatedUser) {
        userService.updateCollaborateur(id, updatedUser);
        return ResponseEntity.ok("Collaborateur mis à jour avec succès");
    }




    //pour assigner
    @PostMapping("/assign-tests")
    public ResponseEntity<?> assignTests(@RequestBody Map<String, Object> payload) {
        Long candidatId = Long.valueOf(payload.get("candidatId").toString());
        List<Integer> qcmIdsInt = (List<Integer>) payload.get("qcmIds");
        List<Integer> problemeIdsInt = (List<Integer>) payload.get("problemeIds");
        Integer durationMinutes = (Integer) payload.get("durationMinutes");

        List<Long> qcmIds = qcmIdsInt.stream().map(Integer::longValue).toList();
        List<Long> problemeIds = problemeIdsInt.stream().map(Integer::longValue).toList();

        attributionService.assignTests(candidatId, qcmIds, problemeIds, durationMinutes);

        return ResponseEntity.ok(Map.of("message", "Tests attribués avec succès"));
    }

    @GetMapping("/assignments")
    public ResponseEntity<List<Attribution>> getAllAssignments() {
        return ResponseEntity.ok(attributionService.getAllAssignments());
    }

    @DeleteMapping("/assignments/{id}")
    public ResponseEntity<?> deleteAssignment(@PathVariable Long id) {
        attributionService.deleteAssignment(id);
        return ResponseEntity.ok("Attribution supprimée avec succès");
    }
}
