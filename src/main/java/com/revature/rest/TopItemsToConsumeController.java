package com.revature.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

@Controller
@CrossOrigin
@RequestMapping("/api/topItemsToConsume")
public class TopItemsToConsumeController {
	
    RestTemplate rest;

	@GetMapping("{problemId}")
	public ResponseEntity<String> getTopItemsToConsumeByProblemId(@PathVariable int problemId) {
		rest = new RestTemplate();
		String resp = rest.getForObject("https://api.nutridigm.com/api/v1/nutridigm/topitemstoconsume?subscriptionId=1&problemId=" + problemId, String.class);
		return ResponseEntity.ok(resp);
	}
	
	
}
