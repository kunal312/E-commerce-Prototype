package Generics;
import java.util.List;

//Generic Class
public class TravelGeneric <T> {
	
	private List<T> names;
	private int ntickets=0;
	private int totalSeats=100;
	
	//Initializing the values for ntickets and name
	
	public TravelGeneric(int nticket, List<T> names)
	{
		this.ntickets=nticket;
		this.names=names;
	}
	//To Calculate the seats available
	public int getTickets()
	{
		if(ntickets<=100)
			
		{
			totalSeats= totalSeats-ntickets;
			for(T uname : names)
			{
			System.out.println("The Tickets for "+uname+ " are booked.");
			}
			System.out.println("No of Available Seats left: "+totalSeats);
			
		}
		
		else
		{
			System.out.println("No Seats Available");
		}
		return totalSeats;
	}
}
