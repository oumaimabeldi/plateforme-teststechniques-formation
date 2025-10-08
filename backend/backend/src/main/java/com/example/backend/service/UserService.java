package com.example.backend.service;

import com.example.backend.entity.Probleme;
import com.example.backend.entity.Qcm;
import com.example.backend.entity.Role;
import com.example.backend.entity.User;
import com.example.backend.repository.ProblemeRepository;
import com.example.backend.repository.QcmRepository;
import com.example.backend.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class UserService {
@Autowired
    private UserRepository userRepository;
@Autowired
    private PasswordEncoder passwordEncoder;
@Autowired
    private EmailService emailService;

    @Autowired
    private QcmRepository qcmRepository;

    @Autowired
    private ProblemeRepository problemeRepository;
// c est l espace de candidat
public List<User> getCandidats(){
return userRepository.findByRole(Role.CANDIDAT);

}
    public void createCandidat(User user){
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new RuntimeException("Email déjà utilisé");
        }

        String rawPassword = user.getPassword();

        user.setPassword(passwordEncoder.encode(rawPassword));
        user.setRole(Role.CANDIDAT);
        userRepository.save(user);

        emailService.sendCredentials(user.getEmail(), user.getName(), rawPassword);
    }
    public void deleteCandidat(Long id) {
        if (!userRepository.existsById(id)) {
            throw new RuntimeException("Candidat introuvable");
        }
        userRepository.deleteById(id);
    }
    public void updateCandidat(Long id, User updatedUser) {
        User existing = userRepository.findById(id).orElseThrow(() -> new RuntimeException("Candidat introuvable"));

        existing.setName(updatedUser.getName());
        existing.setEmail(updatedUser.getEmail());

        if (updatedUser.getPassword() != null && !updatedUser.getPassword().isEmpty()) {
            existing.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
        }

        userRepository.save(existing);
    }

    public String resetPassword(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("Candidat introuvable"));

        String newPassword = generateRandomPassword();
        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);

        emailService.sendCredentials(user.getEmail(), user.getName(), newPassword);

        return newPassword;
    }

    private String generateRandomPassword() {
        return UUID.randomUUID().toString().substring(0, 8);
    }
// cest l esspace de collaborateurs
    public List<User> getCollaborateurs(){
        return userRepository.findByRole(Role.COLLABORATEUR);

    }
    public void createCollaborateur(User user){
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new RuntimeException("Email déjà utilisé");
        }

        String rawPassword = user.getPassword();

        user.setPassword(passwordEncoder.encode(rawPassword));
        user.setRole(Role.COLLABORATEUR);
        userRepository.save(user);

        emailService.sendCredentials(user.getEmail(), user.getName(), rawPassword);
    }
    public void deleteCollaborateur(Long id) {
        if (!userRepository.existsById(id)) {
            throw new RuntimeException("Collaborateur introuvable");
        }
        userRepository.deleteById(id);
    }
    public void updateCollaborateur(Long id, User updatedUser) {
        User existing = userRepository.findById(id).orElseThrow(() -> new RuntimeException("Collaborateur introuvable"));

        existing.setName(updatedUser.getName());
        existing.setEmail(updatedUser.getEmail());

        if (updatedUser.getPassword() != null && !updatedUser.getPassword().isEmpty()) {
            existing.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
        }

        userRepository.save(existing);
    }

    // pour assigner


}
