/**
 *
 */
function usingstrict()
{	
	"use strict";
	try{
	 r =document.getElementById("radius").value;
	 area = 3.14*r*r;
	 x	= document.getElementById("resultstrict");
     x.value=area;
	 }
	 catch(err) {
		 alert(err);
		} 
}
 
 
 function withoutstrict()
{
try{
r =document.getElementById("radius").value;
 area = 3.14*r*r;
    public = document.getElementById("resultstrict");
    public.value=area;
}
catch(err) {
	alert(err);
} 
	 
}



