package com.revature.service;

import com.revature.model.User;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

@Service
public class TokenAuthenticationServiceImpl implements TokenAuthenticationService {

    private String secret = "mySuperSecretToken";

    @NonNull
    private final UserService userService;

    @Autowired
    public TokenAuthenticationServiceImpl(UserService userService) {
        this.userService = userService;
    }

    @Override
    public String getUsernameFromToken(String token) {
        return Jwts.parser()
                .setSigningKey(secret)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    @Override
    public String createToken(User user) {
        return Jwts.builder()
                .setSubject(user.getName())
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();
    }

    @Override
    public User getUserFromToken(String token) {
        final String username = getUsernameFromToken(token);
        return userService.findByEmail(username);
    }
}
