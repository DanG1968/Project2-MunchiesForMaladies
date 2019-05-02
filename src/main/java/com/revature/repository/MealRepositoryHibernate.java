package com.revature.repository;

import java.util.List;

import org.apache.log4j.Logger;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.revature.model.Meal;

@Repository("mealRepository")
@Transactional
public class MealRepositoryHibernate implements MealRepository {

	public static Logger logger = Logger.getLogger(MealRepositoryHibernate.class);
	@Autowired
	private SessionFactory sessionFactory;
	
	public MealRepositoryHibernate() {
		logger.trace("Inject session factory bean");
	}
	
	@Override
	public List<Meal> findall() {
		return sessionFactory.getCurrentSession().createCriteria(Meal.class).list();
	}

	@Override
	public void save(Meal meal) {
		sessionFactory.getCurrentSession().save(meal);

	}

	@Override
	public Meal findByName(String name) {
		try {
			return (Meal) sessionFactory.getCurrentSession().createCriteria(Meal.class)
					.add(Restrictions.like("name",  name))
					.list()
					.get(0);
		} catch (IndexOutOfBoundsException e) {
				return null;
			
		}
	}

}
