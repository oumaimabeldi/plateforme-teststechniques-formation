package com.example.backend.config;

import com.example.backend.entity.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import io.jsonwebtoken.*;

import java.util.Date;

@Service
public class JwtService {
    @Value("${jwt.secret}")
    private String SECRET;

    public String generateToken(User user){
     return Jwts.builder()
             .setSubject(user.getEmail())
             .claim("role", user.getRole().name())
             .setIssuedAt(new Date())
             .setExpiration(new Date(System.currentTimeMillis() + 86400000))
             .signWith(SignatureAlgorithm.HS512, SECRET)
             .compact();
    }
    public String extractEmail(String token) {
        return Jwts.parser()
                .setSigningKey(SECRET)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    public boolean isTokenValid(String token, User user) {
        return extractEmail(token).equals(user.getEmail());
    }
}
