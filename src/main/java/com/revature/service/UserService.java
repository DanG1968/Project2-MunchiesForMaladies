package com.revature.service;

import com.revature.model.User;
import org.springframework.security.core.userdetails.UserDetailsService;

/**
 * Created by evelan on 12/21/15.
 */
public interface UserService extends UserDetailsService {

    User findByEmail(String email);

    User register(User user);

    User findByName(String name);

    boolean registerUser(User user);

}
