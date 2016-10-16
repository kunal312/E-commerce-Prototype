var mysql = require('./mysql');
var express = require('express');
var router = express.Router();
var logger = require('./winston');


router.post('/removefromCart',function(req,res,next)

{

	console.log("Removing item from cart");
	var email = req.session.username;
	console.log("Email for Removing item from cart " +email);

	var itemid = req.body.itemid;
	console.log("Item to delete "+itemid);

	if(req.session.username)
   
   	{	

	var delItems="Delete from cartitems where emailid='" +email+ "'and itemid='"+itemid+"'";

logger.eventLogger.debug("Event:Delete :Deleting  Items user:" +req.session.username+",Item id:"+itemid);

	
	console.log("Query for deleting item:" + delItems);

	mysql.getItems(function(err,results){
		

		if(err){
			throw err;
		}
		else 
		{
			if(results!== undefined){

				console.log("Item Deleted from Cart");

				itemlist = results;
				
				json_responses = {"statusCode" : 200 } ;
				console.log(json_responses);
				res.send(json_responses);

			   }
			else {    
				
				console.log("Items cannot be deleted from cart");

					json_responses = {"statusCode" : 401 };
					console.log(json_responses);
					res.send(json_responses);
				
				
			}
		}  
	},delItems);


	}

	else {
					console.log("User is not logged in")
					json_responses = {"statusCode" : 405 };
					console.log(json_responses);
					res.send(json_responses);

	}





});

module.exports=router;