package com.revature.repository;

import java.util.List;

import com.revature.model.User;

public interface UserRepository {

	List<User> findall();
	User save(User user);
	User findByName(String name);

	User findByEmail(String email);
}
