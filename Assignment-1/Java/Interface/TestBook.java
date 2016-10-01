package Interface;
import static org.junit.Assert.*;
import org.junit.Test;

public class TestBook

	{
	@Test
	public void test()
	{
		//Test For Testing Tax on Books
		Books b = new Books();
		b.setOriginalPrice(760);
		assertEquals(760,b.getOriginalPrice(),0);
		b.setTax(760);
		assertEquals(76, b.getTax(),0);
		assertEquals(836, b.getTaxedPrice(),0);
	}
	}
