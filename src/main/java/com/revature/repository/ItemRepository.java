package com.revature.repository;

import java.util.List;

import com.revature.model.Item;
import com.revature.model.User;

public interface ItemRepository {

	List<User> findall();
	void save(Item item);
	Item findByName(String name);
}
