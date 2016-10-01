/**
 * 
 */
function getdata()
{
var xml = new XMLHttpRequest();
var url = "http://api.population.io/1.0/population/2010/United%20States/";
var table = document.getElementById("population");
	
xml.onreadystatechange=function()
	{
	if (this.readyState == 4 && this.status == 200) 
	{
        myFunction(this.responseText);
    }
	};

xml.open("GET", url, true);
xml.send();

function myFunction(response) 
	{
    var census = JSON.parse(response);
    for(i = 1; i < census.length; i++) {
    	
    	var row = table.insertRow(0);
    	var cell1 = row.insertCell(0);
    	var cell2 = row.insertCell(1);
    	var cell3 = row.insertCell(2);
    	var cell4 = row.insertCell(3);
    	var cell5 = row.insertCell(4);
    	var cell6 = row.insertCell(5);
    	cell1.innerHTML = 	census[i].country;
    	cell2.innerHTML = census[i].age;
    	cell3.innerHTML = census[i].males;
    	cell4.innerHTML = census[i].females;
    	cell5.innerHTML = census[i].total;
    	cell6.innerHTML = census[i].year;
    	
    }
    var rowx =table.insertRow(0);
    var cellc = rowx.insertCell(0);
    cellc.innerHTML = "Country";
    var cella = rowx.insertCell(1);
    cella.innerHTML = "Age";
  
    var cellm = rowx.insertCell(2);
    cellm.innerHTML = "Males";
 
    var cellf = rowx.insertCell(3);
    cellf.innerHTML = "Females";
    
    var cellt = rowx.insertCell(4);
    cellt.innerHTML = "Total";
    
    var celly = rowx.insertCell(5);
    celly.innerHTML = "Year";
    
   
	}
}