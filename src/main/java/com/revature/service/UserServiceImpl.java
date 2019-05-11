package com.revature.service;

import com.google.common.collect.Sets;
import com.revature.model.User;
import com.revature.model.UserRole;
import com.revature.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * Created by Evelan-E6540 on 06/09/2015.
 */
@Service
public class UserServiceImpl implements UserService, UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) {
        return findByEmail(username);
    }

    @Override
    public User register(User user) {

        Optional<User> userOptional = Optional.ofNullable(userRepository.findByEmail(user.getEmail()));
        if (userOptional.isPresent()) {
            throw new IllegalArgumentException("User exists by email");
        }

        user.setUserRoles(Sets.newHashSet(UserRole.ROLE_USER));
        return userRepository.save(user);
    }

    @Override
    public User findByName(String name) {
        return userRepository.findByName(name);
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public boolean registerUser(User user) {
		userRepository.save(user);
		return user.getId() !=0;
	}
}
