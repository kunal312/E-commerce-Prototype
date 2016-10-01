package mystacks;
import static org.junit.Assert.*;


import org.junit.Test;
public class BackButtonTest 
{
	@Test
	public void testPushPop() 
	{
		//Testing push and pop function
		BackButton testbutton = new BackButton(3);
		testbutton.push("First");
		assertEquals("First", testbutton.pop());
		testbutton.push("First");
		testbutton.push("Second");
		assertEquals("Second", testbutton.pop());
	}
}