package com.revature.service;

import java.util.List;

import com.revature.model.Item;

public interface ItemService {

	List<Item> getAllItems();
	public Item getItem(String name);
}
