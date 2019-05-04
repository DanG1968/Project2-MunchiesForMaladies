package com.revature.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.Item;
import com.revature.repository.ItemRepository;

@Service("itemService")
public class ItemServiceAlpha implements ItemService{
	
	private static Logger logger = Logger.getLogger(ItemServiceAlpha.class);
	
	@Autowired
	private ItemRepository itemRepository;
	
	public ItemServiceAlpha() {}
	
	public ItemServiceAlpha(ItemRepository itemRepository) {
		this.itemRepository = itemRepository;
	}

	@Override
	public List<Item> getAllItems() {
		return itemRepository.findall(); 
	}

	@Override
	public Item getItem(String name) {
		return itemRepository.findByName(name);
	}
	
	

}
