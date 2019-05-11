package com.revature.rest;

import com.fasterxml.jackson.annotation.JsonView;
import com.revature.model.User;
import com.revature.service.TokenAuthenticationService;
import com.revature.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
public class AuthenticationController {

    private final TokenAuthenticationService tokenAuthenticationService;
    private final UserService userService;

    @Autowired
    public AuthenticationController(TokenAuthenticationService tokenAuthenticationService, UserService userService) {
        this.tokenAuthenticationService = tokenAuthenticationService;
        this.userService = userService;
    }

    @PostMapping("/auth/sign")
    @ResponseStatus(HttpStatus.CREATED)
    public User authorizeUser(@RequestBody AuthForm authForm) throws AuthenticationException {
        String name = authForm.getUsername();
        User user = userService.findByName(name);
        if (user == null) {
            user = fetchDataFromProviderResourceServer(authForm);
            user = userService.register(user);
        }
        final String token = tokenAuthenticationService.createToken(user);
        user.setToken(token);
        return user;
    }

    private User fetchDataFromProviderResourceServer(AuthForm authForm) {
        User user = new User();
        user.setEmail("");
        user.setName(authForm.getUsername());
        user.setPassword(authForm.getPassword());
        user.setEnabled(1);
        return user;
    }

}
