package com.skilldistillery.EventTracker.controllers;

import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.EventTracker.services.ExpenseService;
import com.skilldistillery.eventtracker.entities.Expense;

@RestController
@RequestMapping("api")
@CrossOrigin({"*", "http://localhost:4200"})
public class ExpenseController {
	
	@Autowired
	private ExpenseService es;
	
	@RequestMapping(path= "expenses", method = RequestMethod.GET)
	public List<Expense> index() {
		return es.index();
	}
	
	@RequestMapping(path="expenses/{id}", method=RequestMethod.GET)
	public Expense show(@PathVariable int id) {
		return es.show(id).get();
	}
	
	@RequestMapping(path = "expenses", method = RequestMethod.POST)
	public Expense create(@RequestBody Expense c) throws ParseException {
		return es.create(c);
	}
	
	@RequestMapping(path = "expenses/{id}", method = RequestMethod.DELETE)
	public Boolean delete(@PathVariable int id) {
		return es.destroy(id);
	}
	
	@RequestMapping(path= "expenses/{id}", method = RequestMethod.PUT)
	public Expense update(@RequestBody Expense e, @PathVariable int id) {
//		2018-05-26
//		5/26/18
		return es.replace(e, id);
	}
	
	@RequestMapping(path="expenses/{id}", method = RequestMethod.PATCH)
	public Expense patch(@RequestBody Expense e, @PathVariable int id) {
		return es.patch(e, id);
	}
	
}
