package Interface;
import static org.junit.Assert.*;

import org.junit.Test;


public class TestLaptop
{
	@Test
	public void test()
	{
		//Test For Testing Tax on Books
	Laptop l = new Laptop();
	l.setOriginalPrice(760);
	assertEquals(760,l.getOriginalPrice(),0);
	l.setTax(760);
	assertEquals(304, l.getTax(),0);
	assertEquals(1064, l.getTaxedPrice(),0);
	
	
	}


}
