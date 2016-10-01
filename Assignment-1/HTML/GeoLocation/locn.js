/**
 * 
 */

var xml = new XMLHttpRequest();

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
	lat=position.coords.latitude;
	long=position.coords.longitude;
	document.getElementById("demo").innerHTML = "Latitude: " + lat + 
    "<br>Longitude: " + long; 
	
	var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +position.coords.latitude+","+position.coords.longitude+"&radius=1000&type=restaurant&key=AIzaSyCcfSwfYhkyTjKJJ8XrsoiCFKN8pNYTjGM";
	xml.open("GET", url, true);
	xml.send();
	var locn_map = "http://maps.googleapis.com/maps/api/staticmap?center=" +position.coords.latitude+ "," +position.coords.longitude+ "&zoom=14&size=400x300&sensor=false";
	document.getElementById("map").innerHTML= "<img src='"+locn_map+"'>";

}

xml.onreadystatechange=function()
{
if (this.readyState == 4 && this.status == 200) 
{
    myFunction(this.responseText);
}
};

function myFunction(response) 
{
	var restaurants = JSON.parse(response);
	result = "<ul>";
	for(i = 1; i < restaurants.results.length; i++) 
		{
			 	restaurants.results[i].name;
			 	result += "<li>" + restaurants.results[i].name+ "</li>";
			 	
			 }
	result += "</ul>";
	document.getElementById("r").innerHTML = result;
}

