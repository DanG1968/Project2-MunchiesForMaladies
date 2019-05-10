package com.revature.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="ITEM")
public class Item {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="itemSequence")
	@SequenceGenerator(name="itemSequence",sequenceName="ITEM_SEQ", allocationSize=1)
	@Column(name="I_ID")
	private int id;
	@Column(name="I_NAME")
	private String name;
	
	public Item() {}

	public Item(int id, String name) {
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
		return "Item [id=" + id + ", name=" + name + "]";
	}
	
	
	
	
		
}
