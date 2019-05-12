package com.revature.service.token;


import com.revature.model.User;


public interface TokenAuthenticationService {
    String getUsernameFromToken(String token);

    String createToken(User user);

    User getUserFromToken(String token);
}
