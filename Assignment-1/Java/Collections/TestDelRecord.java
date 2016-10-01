package Collections;
import static org.junit.Assert.*;

import java.math.BigInteger;
import java.util.ArrayList;

import org.junit.Test;
public class TestDelRecord
{
	
	@Test
	public void test()
	{
		BigInteger ssn= BigInteger.valueOf(987654321);
		//Verifying the map contains no value initally
		AddRecord  rec = new AddRecord();
		assertTrue(rec.map.isEmpty());
		assertEquals(null,rec.map.remove(ssn));
		//Adding Values in HashMap
		ArrayList<String> list1 = new ArrayList<String>();
		list1.add("Kunal");
		list1.add("9158436377");
		list1.add("101 Villa");
		rec.map.put(ssn, list1);
		//After adding it should return removing the elements should return the values associated with the key value which was removed
		assertEquals(list1,rec.map.remove(ssn));
		//Again Checking if there are no elements are present in map
		assertEquals(null,rec.map.remove(ssn));
		}
	
	
}