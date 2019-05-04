package com.revature.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name="ITEM")
@XmlRootElement(name="item")
@XmlAccessorType(XmlAccessType.FIELD)
public class Item {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="itemSequence")
	@SequenceGenerator(name="itemSequence",sequenceName="ITEM_SEQ", allocationSize=1)
	@Column(name="I_ID")
	@XmlAttribute
	private int id;
	
	@Column(name="I_NAME")
	@XmlAttribute
	private String name;
	
//	@OneToMany(cascade=CascadeType.ALL)
//    @JoinTable(name="ITEM_MEALS", joinColumns={@JoinColumn(name="ITEM_ID", referencedColumnName="I_ID")}
//    , inverseJoinColumns={@JoinColumn(name="MEAL_ID", referencedColumnName="M_ID")})
//    private Set<Meal> meals;
	
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
