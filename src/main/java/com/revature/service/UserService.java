package com.revature.service;

<<<<<<< HEAD
public interface UserService {
=======
import java.util.List;

import com.revature.model.User;

public interface UserService {
	
	public boolean registerUser(User user);
	public List<User> getAllUsers();
	public User getUser(String name);
>>>>>>> dev

}
