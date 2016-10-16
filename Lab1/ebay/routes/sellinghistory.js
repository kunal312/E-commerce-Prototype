var mysql = require('./mysql');
var express = require('express');
var router = express.Router();
var logger = require('./winston');


router.post('/sellinghistory',function(req,res,next)

{

	var email = req.session.username;
	console.log("Email for Viewing cart " +email);

	if(req.session.username)
			{
		
		

		var getsoldOrders="select * from items where emailid='"+email+"'";

logger.eventLogger.debug("Event:SellingHistory,Fetching selling history for User:"+email);


		mysql.getItems(function(err,results){
		

		if(err){
			throw err;
		}
		else 
		{
			if(results.length > 0){

				console.log(" Fetched sold items");

				soldlist = results;
				
				json_responses = {"statusCode" : 200,"solditems":soldlist } ;
				console.log(json_responses);
				res.send(json_responses);

			   }
			else {    
				
				console.log("No Sold Orders");

					json_responses = {"statusCode" : 401 };
					console.log(json_responses);
					res.send(json_responses);
				
				
			}
		}  
	},getsoldOrders);


				}

})

module.exports =router;