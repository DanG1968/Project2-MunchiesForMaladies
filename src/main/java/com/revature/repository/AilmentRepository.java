package com.revature.repository;

import java.util.List;

import com.revature.model.Ailment;

public interface AilmentRepository {
	
	void save(Ailment ailment);
	List<Ailment> findall();
	Ailment findByName(String name);
	Ailment findbyID(int id);

}
