package myQueues;

import static org.junit.Assert.*;

import org.junit.Test;

public class CabBookEmptyTest {

	@Test
	// Test Case for checking if inititally Queue is Empty
	public void testempty() {

		CabBook book = new CabBook();
		assertTrue(book.isEmpty());
		book.enqueue("Cab for Person 1");
		assertFalse(book.isEmpty());

	}

}
