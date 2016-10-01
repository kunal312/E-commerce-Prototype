/**
 * 
 */
function bookticket()
{
    var com = document.getElementById("name").value;
    var com1 = document.getElementById("age").value;
    var com2 = document.getElementById("from").value;
    var com3 = document.getElementById("to").value;
  /** 
	if(com=="" ||com1==""||com2==""||com3=="")
	{
	alert("Please enter all the details");
	}
	else
		alert("Ticket Booked");
	*/
    if(com!="" && com1!="" && com2!="" && com3!="")
	{
    	alert("Ticket Booked");
	
	}
	else
		alert("Please enter all the details");
		
}

    
function  changetouppercase()
{
	
	var it=document.getElementById("name");
	 it.value=it.value.toUpperCase();

}
function mouseover()

{
	var bt=document.getElementById("bticket");
	bt.style.backgroundColor = "#00FF00";
}
function mouseout()
{
	var bt=document.getElementById("bticket");
	bt.style.backgroundColor = "";
}
function changecolor()
{
	var source = document.getElementById("from");
    if (source.value == "") 
    {
        source.style.backgroundColor = "red";
    }
    else{
        source.style.backgroundColor = "yellow";
    }
    
}
    function changecolor1()
    {
    	var dst = document.getElementById("to");
    	
        if (dst.value == "") 
        {
        	dst.style.backgroundColor = "red";
        }
        else
        {
        	dst.style.backgroundColor = "yellow";
        }   
    
    }   
