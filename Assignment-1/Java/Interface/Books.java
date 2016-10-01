package Interface;

public class Books implements Store {
	
	double price=0;
	double tax=0;
	
	public void setOriginalPrice(double p)
	{
		this.price=p;
	}
//Calculate Tax
	public void setTax(double t)
	{
		double x = (.1*t);
		this.tax= x;
	}
	
	public double getOriginalPrice()
	{
		return price;
	}
	
	public double  getTax()
	{
		return tax;
	}
	//Calculate Taxed Price
	public double getTaxedPrice()
	{   
		double tprice = price + tax;
		return tprice;
	}
	

}
