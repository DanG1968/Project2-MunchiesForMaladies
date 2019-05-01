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
	
	private MealRepository mealRepository;
	
	public MealServiceAlpha() {}
	
	public MealServiceAlpha(MealRepository mealRepository) {
		logger.trace("Constructor Injection");
		this.mealRepository=mealRepository;
	}
	
	@Autowired
	public void setHibernate(MealRepository mealRepository) {
		this.mealRepository = mealRepository;
	}
	
	@Override
	public boolean registerUser(Meal meal) {
		mealRepository.save(meal);
		return meal.getId() !=0;
	}

	@Override
	public List<Meal> getAllUsers() {
		return mealRepository.findall();
	}

	@Override
	public Meal getMeal(String name) {
		return mealRepository.findByName(name);
	}

}
