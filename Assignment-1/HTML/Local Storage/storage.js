/**
 * 
 */

function submit()
{
	var name = document.getElementById("name").value;
	var email =document.getElementById("email").value;
	var con =document.getElementById("contact").value;
	var addr =document.getElementById("address").value;
	localStorage.setItem('n', name);
	localStorage.setItem('em', email);
	localStorage.setItem('add', addr);
	localStorage.setItem('phone', con);
	alert("Your Shipping Details are saved");
	
}

function getValue()
{
 var getname = localStorage.getItem('n');
 var getemail =localStorage.getItem('em');
 var getcon = localStorage.getItem('phone');
 var getadd= localStorage.getItem('add');
 if(getname)
 document.getElementById("name").value=getname;
 if(getemail)
 document.getElementById("email").value=getemail;
 if(getcon)
	 document.getElementById("contact").value=getcon;
 if(getadd)
	 document.getElementById("address").value=getadd;
}


function reset()
{
	document.getElementById("name").value="";
	document.getElementById("email").value="";
	document.getElementById("address").value="";
	document.getElementById("contact").value="";
localStorage.removeItem('n');
localStorage.removeItem("em");
localStorage.removeItem("add");
localStorage.removeItem("phone");
}
