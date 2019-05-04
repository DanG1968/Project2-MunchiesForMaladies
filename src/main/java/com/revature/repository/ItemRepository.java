package com.revature.repository;

import java.util.List;

import com.revature.model.Item;

public interface ItemRepository {

	List<Item> findall();
	void save(Item item);
	Item findByName(String name);
}
