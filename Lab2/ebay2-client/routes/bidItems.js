
var express = require('express');
var router = express.Router();
var logger = require('./winston');
var mq_client = require('../rpc/client');

router.post('/biditems' ,function(req,res,next)


{
	
	var json_responses = {};
	if(req.session.username)
	{
		//Calcuate Current Date and Expirty Date
		var expiryDate = new Date(Date.now()+4*24*60*60*1000);
		console.log("Current Date:" + new Date());
		console.log("Bid Expiry Date:"+expiryDate);

		
		console.log("Storing Items into Bid244 Table");
		var email = req.session.username;
		var itemName = req.body.itemName;	
		console.log("ItemName: " + itemName);
		var itemDescription = req.body.itemDescription;	
		var sellerName = req.body.sellerName;		
		var itemqty = 1;
		var sellerlocation = req.body.sellerlocation;
		console.log("sellerlocation: " + sellerlocation);
		var itemprice = req.body.itemPrice;	
		var bidprice =0;
		var biduser = null;
		var bidstartdate = new Date();
		console.log("bidstartdate:"+ bidstartdate);
		var bidexpirydate=expiryDate;
		console.log("bidexpirtydate: "+ bidexpirydate);
		
		logger.eventLogger.debug("Event:Auction,New Item for bidding added by User:"+email+",BidStardate:"+bidstartdate+",BidExpirydate:"+expiryDate);


		var msg_payload = { 
				"email" : email,
				"itemname": itemName,
				"itemdescription": itemDescription,
				"itemprice": itemprice,
				"itemremqty": 1,
				"itemtotalqty":1,
				"sellerlocation":  sellerlocation,
				"sellername":sellerName
	
			};
		
		mq_client.make_request('sellBidItems_queue',msg_payload, function(err,results){

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












})

module.exports =router;
