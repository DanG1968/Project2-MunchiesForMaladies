package com.revature.model;

import com.google.common.collect.Sets;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import static com.revature.model.UserRole.ROLE_ADMIN;
import static com.revature.model.UserRole.ROLE_USER;

@Entity
@Table(name="USERS")
public class User implements Serializable, UserDetails {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="userSequence")
	@SequenceGenerator(name="userSequence",sequenceName="USER_SEQ", allocationSize=1)
	@Column(name="U_ID")
	private int id;
	@Column(name="U_NAME")
	private String name;
	@Column(name="U_PASSWORD")
	private String password;
	@Column(name="U_EMAIL")
	private String email;
	@ElementCollection(targetClass = UserRole.class, fetch = FetchType.EAGER)
	@Enumerated(EnumType.STRING)
	@CollectionTable(name = "USER_ROLES")
	@Column(name = "user_roles")
	Set<UserRole> userRoles = new HashSet<>(Sets.newHashSet(ROLE_USER));
	//@JsonView({UserView.FullView.class})
	private transient String token;

	@Column(name = "enabled")
	private int enabled;

	public User() {}

	public User(int id, String name, String password) {
		super();
		this.id = id;
		this.name = name;
		this.password = password;
	}

	public Set<UserRole> getUserRoles() {
		return userRoles;
	}

	public void setUserRoles(Set<UserRole> userRoles) {
		this.userRoles = userRoles;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public void setEnabled(int enabled) {
		this.enabled = enabled;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", password=" + password + "]";
	}

	public boolean hasRoles(UserRole... roles) {

		for (UserRole role : roles) {
			if (!userRoles.contains(role)) {
				return false;
			}
		}
		return true;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		Collection<GrantedAuthority> grantedAuthorities = new ArrayList<>();

		if (hasRoles(ROLE_USER)) {
			grantedAuthorities.add(new SimpleGrantedAuthority(ROLE_USER.name()));
		}

		if (hasRoles(ROLE_ADMIN)) {
			grantedAuthorities.add(new SimpleGrantedAuthority(ROLE_ADMIN.name()));
		}
		return grantedAuthorities;
	}

	@Override
	public String getUsername() {
		return email;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}
