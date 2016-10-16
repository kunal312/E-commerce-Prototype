var ejs = require("ejs");
var mysql = require('./mysql');
var express = require('express');
var router = express.Router();
var logger = require('./winston');

router.post('/sellItems',function(req,res,next)

{

		console.log("Storing New Item into database")

		itemName = req.body.itemName;	
		console.log("ItemName: " + itemName);
		itemDescription = req.body.itemDescription;	
		itemPrice = req.body.itemPrice;		
		sellerName = req.body.sellerName;		
		itemqty = req.body.itemqty;		
		sellerlocation = req.body.sellerlocation;
		console.log("sellerlocation: " + sellerlocation);


	
	if(req.session.username)
	{


var updateitems = 
'INSERT INTO items (emailid, itemname, itemdescription,itemprice, itemseller,itemqty,itemlocation,totalqty)VALUES ("' +req.session.username + '", "' + itemName + '", "' + itemDescription + '", "' + itemPrice + '",  "'+ sellerName +'","'+ itemqty +'","'+ sellerlocation +'","'+ itemqty +'")';
				
logger.eventLogger.debug("Event:Sell,New Fixed Price Item added by User:"+req.session.username);

console.log("Query " + updateitems);

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
	},updateitems);



		}

});












module.exports =router;