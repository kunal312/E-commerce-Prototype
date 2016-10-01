/**
 * 
 */

function submit()
{
	
	var fname = document.getElementById("uploadfile").value;
	var extension = fname.match(/\.(.+)$/)[1];
	if(extension=="exe" )
		{
		alert("You cannot upload \".exe\" files");
		}
	else
		alert("Thank You");
	
	

}