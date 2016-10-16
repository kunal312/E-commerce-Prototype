var mysql = require('./mysql');
var express = require('express');
var router = express.Router();
var logger = require('./winston');

router.post('/biditems' ,function(req,res,next)


{

	//Calcuate Current Date and Expirty Date
		var expiryDate = new Date(Date.now()+4*24*60*60*1000);
		console.log("Current Date:" + new Date());
		console.log("Bid Expiry Date:"+expiryDate);

		
		console.log("Storing Items into Bid Table");
		var email = req.session.username;
		var itemName = req.body.itemName;	
		console.log("ItemName: " + itemName);
		var itemDescription = req.body.itemDescription;	
		var sellerName = req.body.sellerName;		
		var itemqty = 1;
		var sellerlocation = req.body.sellerlocation;
		console.log("sellerlocation: " + sellerlocation);
		var basePrice = req.body.itemPrice;	
		var bidprice =0;
		var biduser = null;
		var bidstartdate = new Date();
		console.log("bidstartdate:"+ bidstartdate);
		var bidexpirydate=expiryDate;
		console.log("bidexpirtydate: "+ bidexpirydate);


var bidquery = 'INSERT INTO items (emailid, itemname, itemdescription, itemprice, itemseller,itemlocation,bidprice,biduser,bidstartdate,bidexpirydate,bid,itemqty) VALUES ("' + email + '", "' + itemName + '", "' + itemDescription + '", "'+ basePrice +'" ,  "'+ sellerName +'","'+ sellerlocation +'","'+ bidprice +'" ,"'+ biduser +'","'+ bidstartdate +'","'+ bidexpirydate +'",1,1)';

logger.eventLogger.debug("Event:Auction,New Item for bidding added by User:"+email+",BidStardate:"+bidstartdate+",BidExpirydate:"+expiryDate);


console.log("Query " + bidquery);

mysql.putItems(function(err,results){
		

		if(err){
			throw err;
		}
		else 
		{
			if(results!== undefined){

				console.log("Items Stored into Databse");

				console.log("Results: " + results);

				
				json_responses = {"statusCode" : 200 } ;
				console.log(json_responses);
				res.send(json_responses);

			   }
			else {    
				
				console.log("Cannot store Items into Database");

					json_responses = {"statusCode" : 401 };
					console.log(json_responses);
					res.send(json_responses);
				
				
			}
		}  
	},bidquery);







})

module.exports =router;
