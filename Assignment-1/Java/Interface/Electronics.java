package Interface;

import java.util.Scanner;

public class Electronics {

	public static void main(String[] args)
	{
		int item=0;
		Scanner reader = new Scanner(System.in);
		System.out.println("Select the Item");
		System.out.println("1. Laptop");
		System.out.println("2. Book");
		System.out.println("3. Exit");
		item = reader.nextInt();
		
		switch(item)
		{
		case 1 :
			Laptop lap = new Laptop();
			System.out.println("Enter the Price of Laptop");
			double lapprice=reader.nextDouble();
			lap.setOriginalPrice(lapprice);
			lap.setTax(lapprice);
			System.out.println("Original Price "+lap.getOriginalPrice());
			System.out.println("Tax: "+lap.getTax());
			System.out.println("Price inclusive Tax: " + lap.getTaxedPrice());
			System.out.println("Thank You");
			break;
			
		case 2:
			Books book = new Books();
			System.out.println("Enter the Price of Book");
			double bookprice=reader.nextDouble();
			book.setOriginalPrice(bookprice);
			book.setTax(bookprice);
			System.out.println("Original Price "+book.getOriginalPrice());
			System.out.println("Tax: "+book.getTax());
			System.out.println("Price inclusive Tax: " + book.getTaxedPrice());
			System.out.println("Thank You");
			break;
			
		case 3:
			System.out.println("Thank You");
			System.exit(0);
			default: 
				System.out.println("Incorrect Choice");
		}
        		
	}
}
