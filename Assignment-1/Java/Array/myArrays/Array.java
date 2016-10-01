package myArrays;

import java.util.Scanner;

public class Array {

	public static void main(String[] args) {
		String name = "";
		int id = 0;
		int Sub1 = 0;
		int Sub2 = 0;
		Scanner reader = new Scanner(System.in);
		System.out.println("Enter number of Students");
		int number = reader.nextInt();
		reader.nextLine();
		// Declaed array of Student
		Student[] details = new Student[number];
		// Take student details from the user
		for (int i = 0; i < details.length; i++) {
			details[i] = new Student();
			System.out.println("Enter Name");
			name = reader.nextLine();
			// reader.nextLine();
			details[i].setName(name);
			System.out.println("Enter Id");
			id = reader.nextInt();
			reader.nextLine();
			details[i].setId(id);
			System.out.println("Enter Marks in Sub1");
			Sub1 = reader.nextInt();
			reader.nextLine();
			details[i].setMarks1(Sub1);
			System.out.println("Enter your Marks in Sub2");
			Sub2 = reader.nextInt();
			reader.nextLine();
			details[i].setMarks2(Sub2);

		}

		for (int i = 0; i < details.length; i++)

		{
			System.out.print("Name: " + details[i].getname());
			System.out.print(" Id: " + details[i].getId());
			System.out.print(" Marks in Sub1:" + details[i].getMarks1());
			System.out.println(" Marks in Sub2: " + details[i].getMarks2());
		}
		// Invoked function to calculate Average and Grade
		Grade g = new Grade();
		g.calAvg(details);
		reader.close();

	}

}