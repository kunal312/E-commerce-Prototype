var ejs = require("ejs");
var express = require('express');
var router = express.Router();
var mq_client = require('../rpc/client');

router.post('/checkout', function(req,res,next)

{


	console.log("Length=" +req.body.itemstobuy.length);
	console.log("Items:" +req.body.itemstobuy);
	var email = req.session.username;

 console.log("Checking Out Items for User " +email);

	 var datepurchased = new Date();
	 console.log(datepurchased);

	 
	 var json_responses ={};
	 var actualremqty;

	 var i;
			
	 
	 
	 
if(req.session.username)
			
{
	
			
	var msg_payload = { 
			"email" : req.session.username,
			"itemstobuy": req.body.itemstobuy
			
		
			};

	mq_client.make_request('checkoutItems_queue',msg_payload, function(err,results){

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
				
				//Sending Success Status Code/Response back 
				json_responses = {"statusCode" : 200 };
				console.log(json_responses);
				res.send(json_responses);

				
				}
			else if(results.statusCode == 401)
			{
				console.log("Order Cannot be Placed since quantity remaining is less");
				json_responses = {"statusCode" : 401,"item" : results.items };
				console.log(json_responses);
				res.send(json_responses);

			}
									
		}  
	});

}

	else{
		console.log("Session does not exists.");
	

		}

});

module.exports=router;
