package com.skilldistillery.EventTracker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.Expense;

public interface ExpenseRepository extends JpaRepository<Expense, Integer> {
	
}
