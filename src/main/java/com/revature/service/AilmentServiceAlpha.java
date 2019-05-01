package com.revature.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.Ailment;
import com.revature.repository.AilmentRepository;

@Service("ailmentService")
public class AilmentServiceAlpha implements AilmentService {
	
	private static Logger logger= Logger.getLogger(MealServiceAlpha.class);
	// Dependency
	
	private AilmentRepository ailmentRepository;
	
	public AilmentServiceAlpha() {}
	
	public AilmentServiceAlpha(AilmentRepository ailmentRepository) {
		logger.trace("Constructor Injection");
		this.ailmentRepository=ailmentRepository;
	}
	
	@Autowired
	public void setHibernate(AilmentRepository ailmentRepository) {
		this.ailmentRepository = ailmentRepository;
	}

	@Override
	public boolean registerAilment(Ailment ailment) {
		ailmentRepository.save(ailment);
		return ailment.getId() !=0;
	}

	@Override
	public List<Ailment> getAllAilments() {
		return ailmentRepository.findall();
	}

	@Override
	public Ailment getAilment(String name) {
		return ailmentRepository.findByName(name);
	}

}
