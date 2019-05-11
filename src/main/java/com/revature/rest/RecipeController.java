package com.revature.rest;


import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Controller
@CrossOrigin
@RequestMapping("/api/recipes")
public class RecipeController {

    RestTemplate rest;

    @GetMapping("{item}")
    public ResponseEntity<String> getAllMealsByFoodItem(@PathVariable String item) {
        rest = new RestTemplate();
        String resp = rest.getForObject("https://www.themealdb.com/api/json/v1/1/search.php?s=" + item, String.class);
        return ResponseEntity.ok(resp);
    }

}
