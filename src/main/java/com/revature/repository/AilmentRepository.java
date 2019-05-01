package com.revature.repository;

import java.util.List;

import com.revature.model.Ailment;

public interface AilmentRepository {
	
	List<Ailment> findall();
	void save(Ailment ailment);
	Ailment findByName(String name);

}
