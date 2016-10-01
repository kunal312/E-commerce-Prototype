package MultiThreading;

public class Modify {

		//create a reference for Object class for using synchronized
		private Object lock= new Object();
		//Set initial no of items equals to 10
		private int items=10;
		
		//Return no of items
		public int getItems()
		{
		return items;
		}
		
		//Remove items
		public void removeItems(int i) {
			synchronized (lock) 
			{
				items=items-i;
			}
		}
		
		//Add Items
		public void addItems(int nitems)
		{
		synchronized(lock)
		{
			items=items+nitems;
		}
		}}


	


