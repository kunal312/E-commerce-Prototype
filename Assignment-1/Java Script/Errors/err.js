/**
 * 
 */

function employee()
{

	var name =document.getElementById("name").value;
	var age =document.getElementById("age").value;
	var contact =document.getElementById("Contact").value;
	var salary =document.getElementById("Salary").value;
try
{
if ( name==""  )throw "Name Cannot be null";
if (isNaN(age) || age=="")  throw "Please input Numeric Value for Age";
if (isNaN(contact) || contact=="") throw "Please enter Numeric Value for Contact No";
if (salary=="") throw "Salary cannot be Null";
}

catch(e)
{
	alert(e);
}
finally{
	document.getElementById("finally").innerHTML= "Thank You";
}
	
}