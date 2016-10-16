var mysql = require('./mysql');
var express = require('express');
var router = express.Router();
var logger = require('./winston');

router.post('/addtoCart' ,function(req,res,next)

{
			console.log("Adding items into Cart..");
		
			

			var itemName = req.body.itemName;	
			console.log("ItemName: " + itemName);
			var itemDescription = req.body.itemDescription;	
			var itemPrice = req.body.itemPrice;		
			var sellerName = req.body.sellerName;		
			var itemqty = req.body.itemqty;		
			var sellerlocation = req.body.sellerlocation;
			console.log("sellerlocation: " + sellerlocation);
			var itemid = req.body.itemid;

logger.eventLogger.debug("Event:AddtoCart :Adding Item to" +req.session.username+ "cart,Item id:"+itemid);



if(req.session.username)
	{


var itemstocart = 
'INSERT INTO cartitems (emailid, itemname, itemdescription,itemprice, itemseller,itemqty,itemlocation,itemid)VALUES ("' +req.session.username + '", "' + itemName + '", "' + itemDescription + '", "' + itemPrice + '",  "'+ sellerName +'","'+ itemqty +'","'+ sellerlocation +'","'+ itemid +'")';
				

console.log("Query " + itemstocart);

mysql.putItems(function(err,results){
		

		if(err){
			throw err;
		}
		else 
		{
			if(results!== undefined){

				console.log("Items Stored into carts");

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
	},itemstocart);



		}

});



















module.exports = router;
