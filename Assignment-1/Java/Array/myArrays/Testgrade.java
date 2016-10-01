package myArrays;
import static org.junit.Assert.*;

import org.junit.Test;

public class Testgrade
{	@Test
	public void testAvg()
	{
	Grade g = new Grade();
	Student [] s1 = new Student[1];
	s1[0] = new Student();
	s1[0].setMarks1(87);
	s1[0].setMarks2(45);
	
	double avg = g.calAvg(s1);
	
	Student  s = new Student();
	s.setMarks1(87);
	s.setMarks2(45);
	 double average = (s.getMarks1() + s.getMarks2())/2;
	assertEquals(average, avg, 001);
	
}}




