package com.revature.repository;

import java.util.List;

import org.apache.log4j.Logger;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import com.revature.model.Item;
import com.revature.model.User;

public class ItemRepositoryHibernate implements ItemRepository{

	private static Logger logger = Logger.getLogger(ItemRepositoryHibernate.class);
	
	@Autowired
	private SessionFactory sessionFactory;
	
	@SuppressWarnings("unchecked")
	@Override
	public List<User> findall() {
		return sessionFactory.getCurrentSession().createCriteria(Item.class).list();
	}

	@Override
	public void save(Item item) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Item findByName(String name) {
		try {
			return (Item) sessionFactory.getCurrentSession().createCriteria(Item.class)
					.add(Restrictions.like("name",  name))
					.list()
					.get(0);
		} catch (IndexOutOfBoundsException e) {
				return null;
			
		}
	}

}
