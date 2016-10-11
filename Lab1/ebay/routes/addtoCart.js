var mysql = require('./mysql');
var express = require('express');
var router = express.Router();

router.post('/addtoCart' ,function(req,res,next)

{
			console.log("Adding items into Cart..");
		
			

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


var itemstocart = 
'INSERT INTO cartitems (emailid, itemname, itemdescription,itemprice, itemseller,itemqty,itemlocation)VALUES ("' +req.session.username + '", "' + itemName + '", "' + itemDescription + '", "' + itemPrice + '",  "'+ sellerName +'","'+ itemqty +'","'+ sellerlocation +'")';
				

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
