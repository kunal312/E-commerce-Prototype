package myQueues;

import static org.junit.Assert.*;

import org.junit.Test;

public class TestPeek {

	@Test
	public void testpeek() {

		CabBook book = new CabBook();

		book.enqueue("Cab for Person 1");
		assertEquals("Cab for Person 1", book.peek());

	}

}
