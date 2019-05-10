package com.revature.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="AILMENT")
public class Ailment {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="ailmentSequence")
	@SequenceGenerator(name="ailmentSequence",sequenceName="AILMENT_SEQ", allocationSize=1)
	@Column(name="A_ID")
	private int id;
	@Column(name="A_NAME")
	private String name;
	@Column(name="A_DESCRIPTION")
	private String description;
	
	public Ailment() {}

	public Ailment(int id, String name, String description) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Ailment [id=" + id + ", name=" + name + ", description=" + description + "]";
	}
	
	

}
