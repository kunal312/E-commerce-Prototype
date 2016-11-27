var ejs = require("ejs");
var express = require('express');
var router = express.Router();
var logger = require('./winston');
var mq_client = require('../rpc/client');


router.post('/showbidItems',function(req,res,next)

{

	

	if(req.session.username)
			{
		var json_responses ={};

		var email = req.session.username;
		console.log("Email for Bidding Items " +email);

		logger.eventLogger.debug("Event:Bid :Retrieving  Items  availabe for Bidding for user:" +req.session.username);


		var msg_payload = { 
				"email" : email,
			
		};
		
		mq_client.make_request('showbiditems_queue',msg_payload, function(err,results){

			if(err){
				console.log(err);
				json_responses = {"statusCode" : 405} ;
				res.send(json_responses);
			}
			
			
				
				if(results.statusCode == 200)

					{
					
					console.log(" Bid Items Fetched");

					var biditemlist = results.items;
					
					json_responses = {"statusCode" : 200,"biditems":biditemlist } ;
					console.log(json_responses);
					res.send(json_responses);

					
					}
				else if(results.statusCode == 401)
				{
					console.log("No Items in Bid Table");

					json_responses = {"statusCode" : 401 };
					console.log(json_responses);
					res.send(json_responses);


				}
										
			
		});




/**
mysql.getItems(function(err,results){
		

		if(err){
			throw err;
		}
		else 
		{
			if(results.length > 0){

				console.log(" Bid Items Fetched");

				biditemlist = results;
				
				json_responses = {"statusCode" : 200,"biditems":biditemlist } ;
				console.log(json_responses);
				res.send(json_responses);

			   }
			else {    
				
				console.log("No Items in Cart");

					json_responses = {"statusCode" : 401 };
					console.log(json_responses);
					res.send(json_responses);
				
				
			}
		}  
	},getbidItems);
*/
}
});


module.exports =router;