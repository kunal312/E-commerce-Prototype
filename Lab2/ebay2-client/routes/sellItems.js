var ejs = require("ejs");
var mysql = require('./mysql');
var express = require('express');
var router = express.Router();
var logger = require('./winston');
var mq_client = require('../rpc/client');

router.post('/sellItems',function(req,res,next)

{
	var json_responses = {};
	if(req.session.username)
	{
		
		console.log("Storing New Item into database");
		var email = req.session.username;
		console.log("Emailid" + email);
		var itemName = req.body.itemName;	
		console.log("ItemName: " + itemName);
		var itemDescription = req.body.itemDescription;	
		var itemPrice = req.body.itemPrice;		
		var sellerName = req.body.sellerName;		
		var itemqty = req.body.itemqty;		
		var sellerlocation = req.body.sellerlocation;
		console.log("sellerlocation: " + sellerlocation);


	
	

		logger.eventLogger.debug("Event:Sell,New Fixed Price Item added by User:"+req.session.username);
		
		
		
				var msg_payload = { 
						"email" : email,
						"itemname": itemName,
						"itemdescription": itemDescription,
						"itemprice": itemPrice,
						"itemremqty": itemqty,
						"itemtotalqty":itemqty,
						"sellerlocation":  sellerlocation,
						"sellername":sellerName
					
						};
				
				mq_client.make_request('sellFixedItems_queue',msg_payload, function(err,results){

					if(err){
						throw err;
					}
					else 
					{
						
						console.log(results);
						
						if(results.statusCode == 200)

							{
							
							console.log("Items stored into database");
						 json_responses = {"statusCode" : 200 } ;
							console.log(json_responses);
							res.send(json_responses);
							
							}
						else if(results.statusCode == 401)
						{
							console.log("Cannot store Items into Database");

							json_responses = {"statusCode" : 401 };
							console.log(json_responses);
							res.send(json_responses);


						}
												
					}  
				});


		}

});












module.exports =router;