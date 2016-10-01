package Generics;

import static org.junit.Assert.*;
import java.util.ArrayList;
import org.junit.Test;


public class TestGenerics {

	@Test
	public void test()
	{
		
		ArrayList<String> list = new ArrayList<String>();
		list.add("Alex");
		TravelGeneric<String> book = new TravelGeneric<String>(1, list);
		//to test the remaining seats
		assertEquals(99, book.getTickets());
		list.add("Ron");
		list.add("Brad");
		TravelGeneric<String> book1 = new TravelGeneric<String>(2, list);
		assertEquals(98, book1.getTickets());
		
		
		
	}
	
	
}
