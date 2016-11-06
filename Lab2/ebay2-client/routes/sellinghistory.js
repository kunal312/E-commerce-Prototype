var mysql = require('./mysql');
var express = require('express');
var router = express.Router();
var logger = require('./winston');
var mq_client = require('../rpc/client');


router.post('/sellinghistory',function(req,res,next)

{

	var email = req.session.username;
	console.log("Email for Selling History  " +email);
	var json_responses = {};
	if(req.session.username)
			
	{
		
		

logger.eventLogger.debug("Event:SellingHistory,Fetching selling history for User:"+email);



var msg_payload = { 
		"email" : req.session.username
		
		
};

mq_client.make_request('sellinghistory_queue',msg_payload, function(err,results){

	if(err){
		throw err;
	}
	else 
	{
		
		console.log(results);
		
		if(results.statusCode == 200)

			{
			
			console.log(" Fetched sold items");

			var soldlist = results.items;
			console.log("SoldItems:" + soldlist);
			json_responses = {"statusCode" : 200,"solditems":soldlist } ;
			console.log(json_responses);
			res.send(json_responses);
			
			}
		else if(results.statusCode == 401)
		{
			console.log("No Sold Orders");
			json_responses = {"statusCode" : 401 };
			console.log(json_responses);
			res.send(json_responses);


		}
								
	}  
});






		


				}

});

module.exports =router;