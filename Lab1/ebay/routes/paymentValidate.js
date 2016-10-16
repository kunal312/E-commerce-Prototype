var ejs = require("ejs");
var mysql = require('./mysql');
var express = require('express');
var router = express.Router();
var logger = require('./winston');

router.post('/paymentValidate', function (req,res,next)
{

logger.eventLogger.debug("Event:Payment :Verifying payment for user:" +req.session.username);
var num = req.param("card");
console.log(num);
var exp = req.param("expiry");
console.log(exp);
var cvv = req.param("cvv");
console.log(cvv);
if(num.length!==16)
	{
		console.log("Invalid Card Number");
		json_responses = {"statusCode" : 401 };
		console.log(json_responses);
		res.send(json_responses);

logger.eventLogger.debug("Event:Payment : payment authorized for user:" +req.session.username);

			
	}
		
else
	{
			console.log("Payment Verified")
			json_responses = {"statusCode" : 200 };
		console.log(json_responses);
		res.send(json_responses);
	}
	
});
module.exports = router;
