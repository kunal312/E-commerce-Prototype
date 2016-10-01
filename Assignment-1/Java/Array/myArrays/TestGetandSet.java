package myArrays;
import static org.junit.Assert.*;

import org.junit.Test;

public class TestGetandSet
{
	@Test
	public void test()
	{
		//Testing getter and setter methods
		Student  s = new Student();
		s.setName("Alex");
		s.setId(101);
		s.setMarks1(87);
		s.setMarks2(45);
		assertEquals("Alex", s.getname());
		assertEquals(101,s.getId());
		assertEquals(87,s.getMarks1());
		assertEquals(45,s.getMarks2());
		
	}
	
}
