package com.skilldistillery.eventtracker.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name="expenses")
public class Expense {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String category;
	
	private double amount;
	
	private String expected;
	
	private String impulse;
	
	@CreationTimestamp
	@Temporal(value= TemporalType.TIMESTAMP)
	private Date date;
	
	public Expense() {
		
	}

	public Expense(int id, String category, double amount, String expected, String impulse, Date date) {
		super();
		this.id = id;
		this.category = category;
		this.amount = amount;
		this.expected = expected;
		this.impulse = impulse;
		this.date = date;
	}

	@Override
	public String toString() {
		return "Expenses [id=" + id + ", category=" + category + ", amount=" + amount + ", expected=" + expected
				+ ", impulse=" + impulse + ", date=" + date + "]";
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getExpected() {
		return expected;
	}

	public void setExpected(String expected) {
		this.expected = expected;
	}

	public String getImpulse() {
		return impulse;
	}

	public void setImpulse(String impulse) {
		this.impulse = impulse;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public int getId() {
		return id;
	}
}
