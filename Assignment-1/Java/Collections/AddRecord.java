package Collections;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;

public class AddRecord {
	//Since SSN can be big number
	BigInteger SSN = BigInteger.ZERO;

	//Creating a Reference for HashMap
	HashMap<BigInteger,ArrayList<String>> map = new HashMap<BigInteger,ArrayList<String>>();
	Scanner reader = new Scanner(System.in);
	
	//For Adding a Record 
	public void addrecord()
	{
	
	
	ArrayList<String> list = new ArrayList<String>();
	System.out.println("Enter Social Security Number(SSN)");
	SSN=reader.nextBigInteger();
	reader.nextLine();
	//Check if SSN is already allocated to some other citizen.
	if(!map.containsKey(SSN))
	{
	System.out.println("Enter Name");
	String name=reader.nextLine();
	list.add(name);
	System.out.println("Enter Contact Number");
	String contact=reader.nextLine();
	list.add(contact);
	System.out.println("Enter Address");
	String address= reader.nextLine();
	list.add(address);
	map.put(SSN,list);
	System.out.println(map.get(SSN));
	System.out.println("Details are Successfully added");
	}
	else
	{
		System.out.println("The SSN is already assigned to other Citizen. Please use a different SSN");
	}
	
	}
	
	//For fetching Record
	public void fetchrecord()
	{
		
		
		System.out.println("Enter Social Security Number(SSN)");
		BigInteger SSN = reader.nextBigInteger();
		//Check if key or ssn exists
		if(map.containsKey(SSN))
		{
		ArrayList<String> details= map.get(SSN);
			
			System.out.println("Details for " +SSN+ ":" + details);	
		}
		else
		{
			System.out.println("No Records fetched for SSN: "+SSN);
		}
	}
	
	//For Deleting a Record
	public void deleterecord()
	{
		
		System.out.println("Enter Social Security Number(SSN)");
		SSN=reader.nextBigInteger();
		//Check if key or ssn  exists
		if(map.containsKey(SSN)) 
		{
			map.remove(SSN);
			System.out.println("Successfully Removed the details for SSN: "+SSN);
		}
		else
		{
			System.out.println("No Records fetched for SSN: "+SSN);
		}
		
	}
	
	
	}
