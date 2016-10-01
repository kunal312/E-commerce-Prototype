/**
 * 
 */
function celtofah()
{
var _celsius = document.getElementById('cel').value; 
var _fah = (((_celsius*9)/5)+32);
document.getElementById("output").value = _fah;
}


function fahtocel()
{
var _fah = document.getElementById('fah').value; 
var _celsius = ((_fah -32)*5)/9;
document.getElementById("output1").value = _celsius;
}
