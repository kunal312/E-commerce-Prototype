var mysql = require('./mysql');
var express = require('express');
var router = express.Router();
var logger = require('./winston');
var mq_client = require('../rpc/client');



router.post('/fetchOrders',function(req,res,next)

{

	var email = req.session.username;
	//console.log("Email for Viewing cart " +email);
	var json_responses ={};

	if(req.session.username)
			{
		
		var msg_payload = { 
				"email" : req.session.username
				
				
		};


	logger.eventLogger.debug("Event:OrderHistory,Fetching Order history for User:"+email);

	
	mq_client.make_request('orderhistory_queue',msg_payload, function(err,results){

		if(err){
			throw err;
		}
		else 
		{
			
			console.log(results);
			
			if(results.statusCode == 200)

				{
				
				console.log("Orders Fetched for user");

				var orderlist = results.items;
				
				json_responses = {"statusCode" : 200,"orders":orderlist } ;
				console.log(json_responses);
				res.send(json_responses);

				
				}
			else if(results.statusCode == 401)
			{
				console.log("No Orders for Users Table");
				json_responses = {"statusCode" : 401 };
				console.log(json_responses);
				res.send(json_responses);
			


			}
									
		}  
	});

	
		


				}

				else {
					json_responses = {"statusCode" : 401 };
					
					res.send(json_responses);

		}

});

module.exports =router;