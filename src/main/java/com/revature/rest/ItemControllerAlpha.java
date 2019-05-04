package com.revature.rest;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

import com.revature.model.Item;
import com.revature.service.ItemService;

@Controller("itemController")
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "/item", produces = MediaType.APPLICATION_JSON_VALUE)
public class ItemControllerAlpha implements ItemController {

	private static Logger logger = Logger.getLogger(ItemControllerAlpha.class);
	
	@Autowired
	private ItemService itemService;
	
	RestTemplate restTemplate;
	String resourceUrl = "https://api.nutridigm.com/swagger/docs/v1/";
	ResponseEntity<String> response = restTemplate.getForEntity(resourceUrl + 
			"nutridigm/fooditems?subscriptionId=all&api_key=https%3A%2F%2Fapi.nutridigm.com%2Fswagger%2Fui%2Findex%23!%2FFoodItems%2FNutridigmV1_FoodItems", 
			String.class);
	

	@Override
	@GetMapping("/all")
	public List<Item> findAllItems() {
		logger.trace("Getting list of items");	
		ResponseEntity<List<Item>> response = restTemplate.exchange(resourceUrl + 
				"nutridigm/fooditems?subscriptionId=all&api_key=https%3A%2F%2Fapi.nutridigm.com%2Fswagger%2Fui%2Findex%23!%2FFoodItems%2FNutridigmV1_FoodItems",
				HttpMethod.GET,
				null,
				new ParameterizedTypeReference<List<Item>>() {}
				);
		List<Item> items = response.getBody();
		return items;
	}

	@Override
	@PostMapping("/find")
	public ResponseEntity<Item> findItem(Item item) {
		logger.trace("Finding item with name of: " + item.getName());
		
		Item foundItem = itemService.getItem(item.getName());
		
		if(foundItem != null) {
			return new ResponseEntity<>(foundItem, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
}
