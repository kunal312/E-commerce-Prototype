package myArrays;
public class Grade

{
	public Grade()
	{
	
	}
	
	double avg=0.0;
	//TO calculate avg and grade of student
	public double calAvg(Student [] sdata)
	
	{
for(int i=0; i<sdata.length;i++)
			
		{
			
			avg= ((sdata[i].getMarks1()) + (sdata[i].getMarks2()))/2;
			if (avg>=90)
			{
					
				System.out.println("Average of "+sdata[i].getname()+" "+avg+" Grade of "+sdata[i].getname()+" A");	
			}
			
			else{
				if (avg>=70 && avg<90)
					System.out.println("Average of "+sdata[i].getname()+" "+avg+" Grade of "+sdata[i].getname()+" B+");
				else
				{
					if (avg>=50 && avg<70)
						System.out.println("Average of "+sdata[i].getname()+" "+avg+" Grade of "+sdata[i].getname()+" B");
					else
						System.out.println("Average of "+sdata[i].getname()+" "+avg+" Grade of "+sdata[i].getname()+" C");
				}		
			}
			
			
		}
		
return avg;
	}
}