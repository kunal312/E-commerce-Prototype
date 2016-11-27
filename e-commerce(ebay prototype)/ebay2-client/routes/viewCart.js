var express = require('express');
var router = express.Router();
var logger = require('./winston');
var mq_client = require('../rpc/client');

router.post('/viewCart',function(req,res,next)

{

	var email = req.session.username;
	console.log("Email for Viewing cart " +email);
	var json_response ={};

	if(req.session.username)
			{
		
		
		

logger.eventLogger.debug("Event:ViewCart :Fetching Items for " +req.session.username);



var msg_payload = { 
		"email" : req.session.username
		
		
};

mq_client.make_request('viewCart_queue',msg_payload, function(err,results){

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
			
			console.log("Items Fetched from cart");
			console.log("Results:"+results.value);
			json_responses = {"statusCode" : 200,"items":results.value } ;
			//console.log(json_responses);
			res.send(json_responses);

			
			}
		else if(results.statusCode == 401)
		{
			console.log("No Items in Table");

			json_responses = {"statusCode" : 401 };
			console.log(json_responses);
			res.send(json_responses);

		}
								
	}  
});



			}


	
	else {

			json_responses = {"statusCode" : 401 };
					console.log(json_responses);
					res.send(json_responses);

		}
})


module.exports =router;