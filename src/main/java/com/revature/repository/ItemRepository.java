package com.revature.repository;

import java.util.List;

import com.revature.model.User;

public interface ItemRepository {

	List<User> findall();
	void save(User user);
	User findByName(String name);
}
