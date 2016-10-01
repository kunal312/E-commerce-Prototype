/**
 * 
 */

function BintoDec()
{
	
	var _bvalue = parseInt(document.getElementById('num').value);
	var _dvalue =0;
	var _base=1;
	var _rem;
	
	while(_bvalue>0)
		{
		_rem = _bvalue % 10;
		_dvalue= (_dvalue + (_rem *_base));
		_bvalue= (_bvalue/10);
		 _base = (_base*2);
		 }
	document.getElementById("output").value= _dvalue;
	}