package com.revature.rest;

import static com.revature.util.ClientMessageUtil.REGISTRATION_SUCCESSFUL;
import static com.revature.util.ClientMessageUtil.SOMETHING_WENT_WRONG;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.ajax.ClientMessage;
import com.revature.model.User;
import com.revature.service.UserService;

@Controller("userController")
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path="/user", produces= MediaType.APPLICATION_JSON_VALUE)
public class UserControllerAlpha implements UserController{

	private static Logger logger = Logger.getLogger(UserControllerAlpha.class);
	
	@Autowired
	private UserService userService;
	
	@Override
	@PostMapping("/register")
	public @ResponseBody ClientMessage registerUser(@RequestBody User user) {
		logger.trace("Registering new user: " + user);
		return (userService.registerUser(user)) ? REGISTRATION_SUCCESSFUL : SOMETHING_WENT_WRONG;
	}

}
