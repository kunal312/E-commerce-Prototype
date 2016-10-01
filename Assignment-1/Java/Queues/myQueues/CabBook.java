package myQueues;

import java.util.LinkedList;
import java.util.Scanner;

public class CabBook {
	// Create a Linked List Reference

	private LinkedList<String> list;

	// Create New Linked List
	public CabBook() {
		list = new LinkedList<String>();
	}

	// Check if Queue is Empty
	public boolean isEmpty() {
		return (list.size() == 0);
	}

	// Add Customers in Queue
	public void enqueue(String obj) {
		list.add(obj);

	}

	// Removes Customers from Queue
	public Object dequeue() {
		Object obj = list.get(0);
		list.remove(0);
		return obj;
	}

	// To display the first Customer in Queue
	public Object peek() {
		return list.get(0);
	}

	// Get the size of the Queue
	public int size() {
		return list.size();
	}

	// Main function
	public static void main(String[] args) {

		CabBook q = new CabBook();
		String input;

	
			
			do
			{
			System.out.println("1. Register for cab");
			System.out.println("2. Allocate a cab");
			System.out.println("3. Check Cab Availability");
			System.out.println("4. Exit");
			System.out.println("Enter your Choice");
			Scanner reader = new Scanner(System.in);
			int choice = reader.nextInt();
			reader.nextLine();
		
			
			
		
			switch (choice) {

			case 1:
				// For Registering a cab
				boolean name;

				do {
					System.out.print("Enter your name");
					reader.nextLine();
					//Scanner reader1 = new Scanner(System.in);
					String userName = reader.nextLine();
					if (!userName.equals("") && (!userName.equals(null))) {

						q.enqueue(userName);
						System.out.println("You have been added to Queue");
						name = true;
					} else {
						System.out.println("Please Enter Your Name");
						name = false;
					}

				} while (!name);
				break;

			case 2:

				// For Allocating
				if (q.isEmpty() == true) {
					System.out.println("No Customers");
				} else {

					System.out.println("Cab for " + q.peek() + " is arriving");
					q.dequeue();
				}
				break;

			case 3:
				// For Checking Cab Availability
				if (q.size() == 0) {
					System.out.println("Hurray!! Cab is available");
				} else {
					System.out
							.println("Currently there are no cabs available. Current Waiting Number "
									+ (q.size() + 1));

				}
				break;

			case 4:
				System.out.println("Thank You");
				System.exit(0);
				break;

			default:
				System.out
						.println("Incorrect Choice!! Please enter from the above options");
				break;
			}
			
			System.out.println("Do you want to continue");
			Scanner reader2 = new Scanner(System.in);
			input = reader2.nextLine();
			

		} while (input.equals("y") || input.equals("Y"));

	}
}