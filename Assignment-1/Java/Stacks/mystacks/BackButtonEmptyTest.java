	package mystacks;
	import static org.junit.Assert.*;
	
	import org.junit.Test;
	
	
	
	public class BackButtonEmptyTest {
		
	@Test
	public void testisEmpty()
		
		{
			BackButton testbutton = new BackButton(1);
			//To Test if Stacks is Empty before pushing the element
			assertTrue(testbutton.isEmpty());
			testbutton.push("First");
			//To Test if stack is not empty after pushinng the element.
			assertFalse(testbutton.isEmpty());
			
		}
	
	
	
	}
