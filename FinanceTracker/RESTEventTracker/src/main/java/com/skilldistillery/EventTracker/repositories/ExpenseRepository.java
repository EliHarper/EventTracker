package com.skilldistillery.EventTracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.skilldistillery.eventtracker.entities.Expense;

public interface ExpenseRepository extends JpaRepository<Expense, Integer> {
	
}
