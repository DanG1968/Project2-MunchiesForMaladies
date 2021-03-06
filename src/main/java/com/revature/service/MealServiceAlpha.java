package com.revature.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.Meal;
import com.revature.repository.MealRepository;

@Service("mealService")
public class MealServiceAlpha implements MealService {

	
	private static Logger logger= Logger.getLogger(MealServiceAlpha.class);
	// Dependency
	@Autowired
	private MealRepository mealRepository;
	
	public MealServiceAlpha() {}
	
	public MealServiceAlpha(MealRepository mealRepository) {
		logger.trace("Constructor Injection");
		this.mealRepository=mealRepository;
	}
	
	
	public void setHibernate(MealRepository mealRepository) {
		this.mealRepository = mealRepository;
	}
	
	public boolean registerMeal(Meal meal) {
		mealRepository.save(meal);
		return meal.getId() !=0;
	}

	@Override
	public List<Meal> getAllMeals() {
		return mealRepository.findall();
	}

	@Override
	public Meal getMeal(String name) {
		return mealRepository.findByName(name);
	}

}
