package myQueues;

import static org.junit.Assert.*;
import org.junit.Test;

public class TestListSize

{
	@Test
	public void testSize() {

		CabBook book = new CabBook();
		book.enqueue("Cab for Person1");
		assertEquals(1, book.size());

	}
}