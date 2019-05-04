package com.revature.repository;

import java.util.List;

import org.apache.log4j.Logger;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.revature.model.Ailment;

@Repository("ailmentRepository")
@Transactional
public class AilmentRepositoryHibernate implements AilmentRepository {

	
	public static Logger logger = Logger.getLogger(MealRepositoryHibernate.class);
	@Autowired
	private SessionFactory sessionFactory;
	
	public AilmentRepositoryHibernate() {
		logger.trace("Inject session factory bean");
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Ailment> findall() {
		return sessionFactory.getCurrentSession().createCriteria(Ailment.class).list();
	}

	@Override
	public void save(Ailment ailment) {
		sessionFactory.getCurrentSession().save(ailment);

	}

	@Override
	public Ailment findByName(String name) {
		try {
			return (Ailment) sessionFactory.getCurrentSession().createCriteria(Ailment.class)
					.add(Restrictions.like("name",  name))
					.list()
					.get(0);
		} catch (IndexOutOfBoundsException e) {
				return null;
			
		}
	}

}
