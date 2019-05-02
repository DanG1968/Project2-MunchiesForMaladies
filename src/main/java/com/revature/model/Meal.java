package com.revature.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="MEAL")
public class Meal {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="mealSequence")
	@SequenceGenerator(name="mealSequence",sequenceName="MEAL_SEQ", allocationSize=1)
	@Column(name="M_ID")
	private int id;
	@Column(name="M_NAME")
	private String name;
	
	public Meal() {}

	public Meal(int id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Meal [id=" + id + ", name=" + name + "]";
	}
	
	
	
}
