var ejs = require("ejs");
var express = require('express');
var router = express.Router();
var logger = require('./winston');
var mq_client = require('../rpc/client');

router.post('/paymentValidate', function (req,res,next)
{
var json_responses = {};
	//if(req.session.username){
logger.eventLogger.debug("Event:Payment :Verifying payment for user:" +req.session.username);
var num = req.param("card");
console.log(num);
var exp = req.param("expiry");
console.log(exp);
var cvv = req.param("cvv");
console.log(cvv);

var msg_payload = { 
		"email" : req.session.username,
		"cardnumber" : num,
		"expirydate": exp,
		"cvv" : cvv
		};



mq_client.make_request('validatePayment_queue',msg_payload, function(err,results){

	if(err){
		console.log(err);
		json_responses = {"statusCode" : 405} ;
		res.send(json_responses);
	}
	else 
	{
		
		console.log(results);
		
if(results.statusCode == 200)

			{
			
			logger.eventLogger.debug("Event:Payment : payment authorized for user:" +req.session.username);
			console.log("Payment Verified")
				json_responses = {"statusCode" : 200 };
			console.log(json_responses);
			res.send(json_responses);
			
			}
		else if(results.statusCode == 401)
		{
			console.log("Items cannot be deleted from cart");

			console.log("Invalid Card Number");
			json_responses = {"statusCode" : 401 };
			console.log(json_responses);
			res.send(json_responses);


		}
								
	}  
});
	






	
	//}
});
module.exports = router;
