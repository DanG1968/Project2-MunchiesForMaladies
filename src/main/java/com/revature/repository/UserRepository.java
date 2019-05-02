package com.revature.repository;

<<<<<<< HEAD
public interface UserRepository {

=======
import java.util.List;

import com.revature.model.User;

public interface UserRepository {

	List<User> findall();
	void save(User user);
	User findByName(String name);
	
>>>>>>> dev
}
