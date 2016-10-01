/**
 * 
 */
var _selitems = [];

function getItems() 
{
     
  var _nitems = document.getElementsByName('items[]');

  for(var i=0; i<_nitems.length; i++) 
  {
    if(_nitems[i].type == 'checkbox' && _nitems[i].checked == true) 
    	_selitems.push(_nitems[i].value);
  }
  
  document.getElementById('numberofitems').innerHTML= " No of Items Selected:<br/> "+ _selitems.length;
  document.getElementById('output').innerHTML="Items Selected:<br/>"+ _selitems;
  
  var selectitems= document.getElementById("selectitems");
  selectitems.style.display = 'none';
  
  var addtocart= document.getElementById("addtocart");
  addtocart.style.display = "block";
 }

function addtocart()
{
	if(_selitems.length > 0)
		{
		document.getElementById('cart').innerHTML="Following items are added into cart:<br/>" + _selitems;
		}
	else
		
		{
		document.getElementById('cart').innerHTML="There are no items in the cart<br/>";
		
		}
	var removecart = document.getElementById("removeitems");
	removecart.style.display = "block";
	var placeorder = document.getElementById("placeorder");
	placeorder.style.display = "block";
	var addtocart= document.getElementById("addtocart");
	  addtocart.style.display = 'none';
	
	
}

function removecart()
{	
	if (_selitems.length > 0)
		{
	document.getElementById('remove1').innerHTML=" Removed the last added Item " +_selitems.pop() + "  from the cart:<br/>" ;
	document.getElementById('rem').innerHTML= "Remaining Items in Cart:<br/>" + _selitems;
		}
	else
		document.getElementById('rem').innerHTML= "No Items left in cart";
	
		
}

function placeorder()
{
if (_selitems.length > 0)
{
	document.getElementById('place').innerHTML= "Thank You!! Your Order is confirmed"; 
	var removecart = document.getElementById("removeitems");
	removecart.style.display = 'none';
	var placeorder = document.getElementById("placeorder");
	placeorder.style.display = 'none';
}
else
	{
	var removecart = document.getElementById("removeitems");
	removecart.style.display = 'none';
	var placeorder = document.getElementById("placeorder");
	placeorder.style.display = 'none';
	document.getElementById('place').innerHTML= "No Items Selected"; 
	}

}
