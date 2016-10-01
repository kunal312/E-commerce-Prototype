package Collections;

import java.util.Scanner;

public class Information {

	public static void main(String[] args) {

		String input;
		AddRecord a = new AddRecord();

		// Taking Input from User
		do {
			Scanner reader = new Scanner(System.in);
			System.out.println("Welcome to Personal Record Management System");
			System.out.println("1. Add a Record");
			System.out.println("2. Fetch a Record");
			System.out.println("3. Delete a Record");
			System.out.println("4. Exit");

			int choice = reader.nextInt();

			switch (choice) {

			case 1:

				a.addrecord();
				break;

			case 2:

				a.fetchrecord();
				break;

			case 3:
				a.deleterecord();
				break;

			case 4:
				System.out.println("Thank You");
				System.exit(0);
				break;

			default:
				System.out.println("Incorrect Choice");
				break;

			}
			System.out.println("Do you want to Continue");
			input = reader.next();

		} while (input.equals("y") || input.equals("Y"));

	}

}
