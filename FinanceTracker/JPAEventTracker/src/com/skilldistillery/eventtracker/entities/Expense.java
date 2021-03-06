package com.skilldistillery.eventtracker.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


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
	
	private String date;
	
	public Expense() {
		
	}

	public Expense(int id, String category, double amount, String expected, String impulse, String date) {
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

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public int getId() {
		return id;
	}
}
