package myQueues;

import static org.junit.Assert.*;

import org.junit.Test;

public class EnqueueTest {

	@Test
	public void testenq() {

		CabBook book = new CabBook();
		book.enqueue("Cab for Person 1");
		assertEquals("Cab for Person 1", book.dequeue());
		book.enqueue("Cab for Person 2");
		book.enqueue("Cab for Person 3");
		assertEquals("Cab for Person 2", book.dequeue());

	}

}
