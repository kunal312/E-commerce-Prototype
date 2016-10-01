/**
 * 
 */
function caltax()
{
var _salary = document.getElementById("salary").value;	
var _state = document.getElementById("state").value;


switch(_state)
{

case "CA":
		if (_salary>=100000)
			{
			_salary = _salary - (.4*_salary);
			
			document.getElementById("taxpercentage").value = "40%";
			document.getElementById("fsalary").value = _salary;
			}
		else if(_salary>=60000 && _salary<100000)
			{
			_salary = _salary - (.3*_salary);
			document.getElementById("taxpercentage").value = "30%";
			document.getElementById("fsalary").value = _salary;
			}
		else
			{
			alert("No Tax for your Salary");
			}
		break;
	
case "TX":
	 if( _salary>=100000)
	 {
			_salary = _salary - (.18*_salary);
			document.getElementById("taxpercentage").value = "18%";
			document.getElementById("fsalary").value = _salary;
			}
		else if(_salary>=60000 && _salary<100000)
			{
			_salary = _salary - (.1*_salary);
			document.getElementById("taxpercentage").value = "10%";
			document.getElementById("fsalary").value = _salary;
			}
		else
			{
			alert("No Tax for your Salary");
			}
	 break;

  default : 
	   alert("Please input your Salary");

}

}