package com.revature.service;

import java.util.List;

import com.revature.model.Meal;

public interface MealService {
	
	public boolean registerUser(Meal meal);
	public List<Meal> getAllUsers();
	public Meal getMeal(String name);

}
