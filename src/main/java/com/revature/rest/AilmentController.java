package com.revature.rest;

import com.revature.model.Ailment;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Controller
@CrossOrigin
@RequestMapping("/api/ailments")
public class AilmentController {

    private RestTemplate rest;

    @GetMapping
    public ResponseEntity findAll(){
        rest = new RestTemplate();
        List ailments = rest.getForObject("https://api.nutridigm.com/api/v1/nutridigm/healthconditions?subscriptionId=1",
                List.class);
        return ResponseEntity.ok(ailments);
    }

}
