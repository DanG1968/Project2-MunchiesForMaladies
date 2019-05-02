package com.revature.service;

import java.util.List;

import com.revature.model.Ailment;

public interface AilmentService {
	
	public boolean registerAilment(Ailment ailment);
	public List<Ailment> getAllAilments();
	public Ailment getAilment(String name);

}
