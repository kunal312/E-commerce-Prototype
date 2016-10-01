package Interface;
public interface Store {
	
	void setOriginalPrice(double p);
	void setTax(double t);
	double getOriginalPrice();
	double getTax();
	double getTaxedPrice();
	

}
