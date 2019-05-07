package com.revature.repository;

import java.util.List;

import com.revature.model.Meal;

public interface MealRepository {
	
	List<Meal> findall();
	void save(Meal meal);
	Meal findByName(String name);

}
