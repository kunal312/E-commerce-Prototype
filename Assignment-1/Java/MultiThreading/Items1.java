package MultiThreading;

public class Items1 implements Runnable {
	
	Modify mod = new Modify();
	
	public static void main(String[] args)
	{
		//Instantiated the calss Items1
		Items1 cart = new Items1();
		//Instantiated Thread references
		Thread t1 = new Thread(cart,"User1");
		Thread t2 = new Thread(cart, "User2");
		//starting the threads
		t1.start();
		t2.start();
	
	}

public void run() 

	{
		for(int i=0;i<2;i++)
		
		{
			remove(1); //Removing 1 item from the cart
			add(2); 	//Adding 2 items into the cart
		}
			
	}

private void remove(int nitems)
{
	
	System.out.println(Thread.currentThread().getName()+" "+ " is trying to Remove item");
	try 
		{
			Thread.sleep(100);
		} 
	catch (InterruptedException e) 
		{
			e.printStackTrace();
		}		
	mod.removeItems(nitems);
	System.out.println(Thread.currentThread().getName()+""+" has removed the item");
	System.out.println("Total Items after "+Thread.currentThread().getName()+ " removed the item: "+mod.getItems());
}

private void add(int nitems)
{
	System.out.println(Thread.currentThread().getName()+" "+ "is trying to Add item");
	try 
	{
		Thread.sleep(100);
	} 
catch (InterruptedException e) 
	{
		e.printStackTrace();
	}		
	mod.addItems(nitems);
	System.out.println(Thread.currentThread().getName()+""+"has added the item");
	System.out.println("Total Items after "+Thread.currentThread().getName()+ "added the item: "+mod.getItems());
}

}
