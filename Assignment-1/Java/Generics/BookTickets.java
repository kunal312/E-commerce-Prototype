package Generics;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class BookTickets {

	public static void main(String[] args) {
		Scanner reader = new Scanner(System.in);
		//Two references created one of String type for Flight and other of Train Type for Train
		
		List<String> flightlist = null;
		List<Train> trainlist;
		System.out.println("Select an option to book a ticket");
		System.out.println("1. Flight");
		System.out.println("2. Train");
		int choice = reader.nextInt();

		switch (choice) {
		//If user selects Flight
		case 1:
			
			flightlist = new ArrayList<String>();
			System.out.println("Enter number of Tickets");
			int ntickets = reader.nextInt();
			for (int i = 0; i < ntickets; i++) {
				System.out.println("Enter Passenger " + (i + 1) + " Name: ");
				String name = reader.next();
				flightlist.add(name);

			}
			//Passing above objects into Generics classs
			TravelGeneric<String> bookFlight = new TravelGeneric<String>(ntickets, flightlist);
			bookFlight.getTickets();
			break;

		case 2:
			//If user selects Train
			trainlist = new ArrayList<Train>();
			System.out.println("Enter Number of Tickets");
			int ttickets = reader.nextInt();
			for (int i = 0; i < ttickets; i++) {
				Train t = new Train();
				System.out.println("Enter Passenger " + (i + 1) + " Name: ");
				t.username = reader.next();
				trainlist.add(t);
			}
			//Passing above objects into Generics classs
			TravelGeneric<Train> bookFlight1 = new TravelGeneric<Train>(ttickets, trainlist);
			bookFlight1.getTickets();
			break;

		}

	}

}
