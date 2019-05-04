package com.revature.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name="AILMENT")
@XmlRootElement(name="ailment")
@XmlAccessorType(XmlAccessType.FIELD)
public class Ailment {
	
	@Id
	@Column(name="A_ID")
	@XmlAttribute
	private int id;
	
	@Column(name="A_NAME")
	@XmlAttribute
	private String name;

	@OneToMany(cascade=CascadeType.ALL)
	@JoinTable(name="AIL_ITEM", joinColumns={@JoinColumn(name="AILMENT_ID", 
	referencedColumnName="A_ID")}
    , inverseJoinColumns={@JoinColumn(name="ITEM_ID", referencedColumnName="I_ID")})
    private Set<Item> items;
	
	public Ailment() {}

	public Ailment(int id, String name) {
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
		return "Ailment [id=" + id + ", name=" + name + "]";
	}
	
	

}
