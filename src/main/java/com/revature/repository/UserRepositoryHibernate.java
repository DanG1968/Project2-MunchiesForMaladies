package com.revature.repository;

import java.util.List;

import org.apache.log4j.Logger;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.revature.model.User;

@Repository("userRepository")
@Transactional
public class UserRepositoryHibernate implements UserRepository{

	
	public static Logger logger = Logger.getLogger(UserRepositoryHibernate.class);
	@Autowired
	private SessionFactory sessionFactory;
	
	public UserRepositoryHibernate() {
		logger.trace("Inject session factory bean");
		
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<User> findall() {
		return sessionFactory.getCurrentSession().createCriteria(User.class).list();
	}

	@Override
	public User save(User user) {
		return (User)sessionFactory.getCurrentSession().save(user);
	}

	@Override
	public User findByName(String name) {
		try {
			return (User) sessionFactory.getCurrentSession().createCriteria(User.class)
					.add(Restrictions.like("name",  name))
					.list()
					.get(0);
		} catch (IndexOutOfBoundsException e) {
				return null;
			
		}
	}

	@Override
	public User findByEmail(String email) {
		try {
			return (User) sessionFactory.getCurrentSession().createCriteria(User.class)
					.add(Restrictions.like("email",  email))
					.list()
					.get(0);
		} catch (IndexOutOfBoundsException e) {
			return null;

		}
	}

}
