package com.revature.rest;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.revature.model.Item;

public interface ItemController {

	List<Item> findAllItems ();
	ResponseEntity<Item> findItem(Item item);
}
