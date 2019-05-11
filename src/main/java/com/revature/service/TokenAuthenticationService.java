package com.revature.service;


import com.revature.model.User;

/**
 * Created by Evelan on 26/12/2016.
 */
public interface TokenAuthenticationService {
    String getUsernameFromToken(String token);

    String createToken(User user);

    User getUserFromToken(String token);
}
