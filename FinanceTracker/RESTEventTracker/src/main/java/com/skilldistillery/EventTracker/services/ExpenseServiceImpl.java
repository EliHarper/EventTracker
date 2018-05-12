package com.skilldistillery.EventTracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.EventTracker.repositories.ExpenseRepository;
import com.skilldistillery.eventtracker.entities.Expense;

@Service
public class ExpenseServiceImpl implements ExpenseService {
	
	@Autowired
	private ExpenseRepository er;

	@Override
	public List<Expense> index() {
		List<Expense> expenses = er.findAll();
		return expenses;
	}

	@Override
	public Expense create(Expense e) {
		return er.saveAndFlush(e);
	}

	@Override
	public Boolean destroy(int id) {
		try {
			er.deleteById(id);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}

	@Override
	public Optional<Expense> show(int id) {
		return er.findById(id);
	}

	@Override
	public Expense replace(Expense e, int id) {
		
		Expense managedExpense = er.findById(id).get();
		
		managedExpense.setAmount(e.getAmount());
		managedExpense.setCategory(e.getCategory());
		managedExpense.setDate(e.getDate());
		managedExpense.setExpected(e.getExpected());
		managedExpense.setImpulse(e.getImpulse());
		
		return er.saveAndFlush(managedExpense);
		
	}

	@Override
	public Expense patch(Expense e, int id) {
		
		Expense managedExpense = er.findById(id).get();
		
		if (e.getAmount() != 0) {
			managedExpense.setAmount(e.getAmount());
		}
		if (e.getCategory() != null && !e.getCategory().equals("")) {
			managedExpense.setCategory(e.getCategory());
		}
		if (e.getDate() != null) {
			managedExpense.setDate(e.getDate());
		}
		if (e.getExpected() != null && ! e.getExpected().equals("")) {
			managedExpense.setExpected(e.getExpected());
		}
		if (e.getImpulse() != null && ! e.getImpulse().equals("")) {
			managedExpense.setImpulse(e.getImpulse());
		}
		
		return er.saveAndFlush(managedExpense);
	}
}