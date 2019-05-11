//package com.revature.service;
//
//import java.util.List;
//
//import org.apache.log4j.Logger;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.revature.model.User;
//import com.revature.repository.UserRepository;
//
//@Service("userService")
//public class UserServiceAlpha implements UserService{
//
//	private static Logger logger= Logger.getLogger(UserServiceAlpha.class);
//	// Dependency
//	@Autowired
//	private UserRepository userRepository;
//
//	public UserServiceAlpha() {}
//
//	public UserServiceAlpha(UserRepository userRepository) {
//		logger.trace("Constructor Injection");
//		this.userRepository=userRepository;
//	}
//
//
//	public void setHibernate(UserRepository userRepository) {
//		this.userRepository = userRepository;
//	}
//
//	@Override
//	public boolean registerUser(User user) {
//		userRepository.save(user);
//		return user.getId() !=0;
//	}
//
//	@Override
//	public List<User> getAllUsers() {
//		return userRepository.findall();
//	}
//
//	@Override
//	public User getUser(String name) {
//		return userRepository.findByName(name);
//	}
//
//}
