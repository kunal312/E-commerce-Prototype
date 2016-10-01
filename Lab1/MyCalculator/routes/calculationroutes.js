var express = require('express');
var router = express.Router();

router.post('/', function ( req,res,next)
		{
	
	
	
	var total = parseFloat(req.param("total"));
	console.log("total:" + total);
	var previousValue = parseFloat(req.param("previousValue"));
	console.log("pv:" + previousValue);
	var operator = req.param("operator");
	console.log("opr:" + operator);

	
	var result;

	switch (operator)
	{

			case "+" :

			result = total + previousValue;
			console.log("result:" + result);

			res.send({"result":result});
			break;

			case "-" :
			result = total - previousValue;
			res.send({"result":result});
			break;

			case "*" :
			result = total * previousValue;
			res.send({"result":result});
			break;

			case "/":

			if(previousValue !=0)
			{
			result = total/previousValue;
			res.send({"result":result});
			}
			else 
			{
				res.send({"result":"Cannot Divide by Zero"});
					
			}
			break;

	}
	
	});

module.exports = router;