package com.skilldistillery.EventTracker.services;

import java.util.List;
import java.util.Optional;

import com.skilldistillery.eventtracker.entities.Expense;

public interface ExpenseService {
	
	List<Expense> index();

	Expense create(Expense e);

	Boolean destroy(int id);

	Optional<Expense> show(int id);

	Expense replace(Expense e, int id);

	Expense patch(Expense e, int id);

}
