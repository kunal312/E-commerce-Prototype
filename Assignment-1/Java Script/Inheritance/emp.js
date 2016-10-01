
var Attributes = function (length,width){
        this.length = length;
        this.width = width;};

Attributes.prototype.getArea = function()
{
	this.area = this.length*this.width;
	return this.area;
};

var Area = function()
{
	
};
var Volume = function(height)
{
	this.height=height;
};

function calarea()
{
var length = document.getElementById("length").value;
var breadth=document.getElementById("width").value;

Area.prototype = new Attributes(length,breadth);
var area=new Area();
document.getElementById("resultarea").value=area.getArea();

document.getElementById("h").style.display ="block";
document.getElementById("height1").style.display ="inline-block";
document.getElementById("bvol").style.display ="inline-block";
document.getElementById("resultvol").style.display ="inline-block";

}

function calvol()
{
var height1 = document.getElementById("height1").value;
Volume.prototype = new Area();
var vol= new Volume(height1);
var ar= vol.getArea();
var h=vol.height;
document.getElementById("resultvol").value= ar*h;
}












