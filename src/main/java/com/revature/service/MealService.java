package com.revature.service;

import java.util.List;

import com.revature.model.Meal;

public interface MealService {
	
	public boolean registerMeal(Meal meal);
	public List<Meal> getAllMeals();
	public Meal getMeal(String name);

}
