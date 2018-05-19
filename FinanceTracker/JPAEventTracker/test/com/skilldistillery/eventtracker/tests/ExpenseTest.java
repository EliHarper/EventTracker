//package com.skilldistillery.eventtracker.tests;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//
//import javax.persistence.EntityManager;
//import javax.persistence.EntityManagerFactory;
//import javax.persistence.Persistence;
//
//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.DisplayName;
//import org.junit.jupiter.api.Test;
//
//import com.skilldistillery.eventtracker.entities.Expense;
//
//public class ExpenseTest {
//	
//	private EntityManagerFactory emf;
//	private EntityManager em;
//	
//	@BeforeEach
//	void setUp() throws Exception {
//		emf = Persistence.createEntityManagerFactory("Expense");
//		em = emf.createEntityManager();
//	}
//
//	@AfterEach
//	void tearDown() throws Exception {
//		em.close();
//		emf.close();
//	}
//
//	@Test
//	@DisplayName("Test Expense Entity")
//	public void test_expense_entity() {
//		Expense e = em.find(Expense.class, 1);
//		assertEquals("Rent", e.getCategory());
//	}
//	
//}
