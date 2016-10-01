/**
 * 
 */

function Student(name,id,marks1,marks2,marks3)
{
this.name=name;
this.id=id;
this.marksinsub1 = marks1;
this.marksinsub2 = marks2;
this.marksinsub3 = marks3;
this.avg = average;
}

function average()
{

var sum = parseInt(this.marksinsub1) + parseInt(this.marksinsub2) + parseInt(this.marksinsub3);
var av=sum/3;
return av;
}
 function main()
 {
var name =document.getElementById("name").value;
var id =document.getElementById("sid").value;
var marks1 =document.getElementById("marks1").value;
var marks2 =document.getElementById("marks2").value;
var marks3 =document.getElementById("marks3").value;

var details = new Student(name,id,marks1,marks2,marks3)	;
document.getElementById("avg").value = details.avg();
}

	 