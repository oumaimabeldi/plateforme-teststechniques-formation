package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    @Autowired
    private JavaMailSender mailSender;

    public void sendCredentials(String to, String name, String password) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject("Vos identifiants de connexion");
        message.setText("Bonjour " + name + ",\n\nVoici vos identifiants :\nEmail : " + to + "\nMot de passe : " + password + "\n\nMerci.");
        mailSender.send(message);
    }
}