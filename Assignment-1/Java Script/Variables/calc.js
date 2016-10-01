/**
 * 
 */

var _result=0;
function add()
{
var x = parseInt(document.getElementById("no1").value);
var y = parseInt(document.getElementById("no2").value);
_result = (x+ y);
document.getElementById("aresult").value = _result;

}

function sub()
{
var x = parseInt(document.getElementById("no3").value);
var y = parseInt(document.getElementById("no4").value);	
_result = (x- y);
document.getElementById("sresult").value = _result;

}

function multiply()
{
	var x = parseInt(document.getElementById("no5").value);
	var y = parseInt(document.getElementById("no6").value);	
	_result = (x* y);
	document.getElementById("mresult").value = _result;
}

function division()
{
	var x = parseInt(document.getElementById("no7").value);
	var y = parseInt(document.getElementById("no8").value);	
	if (y!=0)
		{
	_result = (x/ y);
	document.getElementById("dresult").value = _result;
		}
	else 
		alert("Denominator Cannot be Zero");
}

function factorial()
{
	var number = document.getElementById("no9").value;
	var fact=1;
	for (var i=1;i<=number;i++)
		{
		fact=fact*i;
		}
	_result = fact;
	document.getElementById("fresult").value = _result;
}