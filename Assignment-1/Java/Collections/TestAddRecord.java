package Collections;

import static org.junit.Assert.*;

import java.math.BigInteger;
import java.util.ArrayList;

import org.junit.Test;
public class TestAddRecord
{
	
	@Test
	public void test()
	{
		
		AddRecord  rec = new AddRecord();
		//Test to check if map is empty
		assertTrue(rec.map.isEmpty());
		assertEquals(0,rec.map.size());
		BigInteger ssn= BigInteger.valueOf(987654321);
		ArrayList<String> list1 = new ArrayList<String>();
		list1.add("Kunal");
		list1.add("9158436377");
		list1.add("101 Villa");
		rec.map.put(ssn, list1);
		//test if map is populated with the above key
		assertTrue(rec.map.containsKey(ssn));
		//test if values are populated correctly
		assertEquals(list1, rec.map.get(ssn));
		//Negative test that map is not empty after putting the elements
		assertFalse(rec.map.isEmpty());
		//test the size of map aftr inserting the values
		assertEquals(1,rec.map.size());
	}
	
	
}