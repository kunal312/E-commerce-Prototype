var express = require('express');
var router = express.Router();
var logger = require('./winston');
var mq_client = require('../rpc/client');


router.post('/removefromCart',function(req,res,next)

{

	
	console.log("Removing item from cart");
	var email = req.session.username;
	console.log("Email for Removing item from cart " +email);

	var itemid = req.body.itemid;
	console.log("Item to delete "+itemid);
	
	var json_responses ={};

	if(req.session.username)
   
   	{	


logger.eventLogger.debug("Event:Delete :Deleting  Items user:" +req.session.username+",Item id:"+itemid);

var msg_payload = { 
		"email" : req.session.username,
		"itemid": itemid
		
	
		};

mq_client.make_request('removeFromCart_queue',msg_payload, function(err,results){

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
			
			console.log("deleted item from cart");

			json_responses = {"statusCode" : 200 } ;
			console.log(json_responses);
			res.send(json_responses);
			
			}
		else if(results.statusCode == 401)
		{
			console.log("Items cannot be deleted from cart");

			json_responses = {"statusCode" : 401 };
			console.log(json_responses);
			res.send(json_responses);

		}
								
	}  
});
	
				




   	
   	
   	
   	}


	
	
	
	
	else {
					console.log("User is not logged in")
					json_responses = {"statusCode" : 405 };
					console.log(json_responses);
					res.send(json_responses);

	}





});

module.exports=router;