var mysql = require('./mysql');
var express = require('express');
var router = express.Router();
var logger = require('./winston');



router.post('/fetchOrders',function(req,res,next)

{

	var email = req.session.username;
	//console.log("Email for Viewing cart " +email);

	if(req.session.username)
			{
		
		

		var getOrders="select * from orderhistory where emailid='"+email+"'";

		logger.eventLogger.debug("Event:OrderHistory,Fetching Order history for User:"+email);

		mysql.getItems(function(err,results){
		

		if(err){
			throw err;
		}
		else 
		{
			if(results.length > 0){

				console.log("Orders Fetched for user");

				orderlist = results;
				
				json_responses = {"statusCode" : 200,"orders":orderlist } ;
				console.log(json_responses);
				res.send(json_responses);

			   }
			else {    
				
				console.log("No Orders for Users Table");

					json_responses = {"statusCode" : 401 };
					console.log(json_responses);
					res.send(json_responses);
				
				
			}
		}  
	},getOrders);


				}

				else {
					json_responses = {"statusCode" : 401 };
					//console.log(json_responses);
					res.send(json_responses);

		}

})

module.exports =router;