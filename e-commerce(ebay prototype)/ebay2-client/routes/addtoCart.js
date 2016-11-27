var express = require('express');
var router = express.Router();
var logger = require('./winston');
var mq_client = require('../rpc/client');

router.post('/addtoCart' ,function(req,res,next)

{
			console.log("Adding items into Cart..");
		
			var itemname = req.body.itemname;	
			console.log("ItemName: " + itemname);
			var itemdescription = req.body.itemdescription;
			console.log("itemdescription: " + itemdescription);
			var itemprice = req.body.itemprice;		
			console.log("itemprice: " + itemprice);
			var sellername = req.body.sellername;	
			console.log("sellername: " + sellername);
			var itemremqty = req.body.itemremqty;	
			console.log("itemremqty: " + itemremqty);
			var sellerlocation = req.body.sellerlocation;
			console.log("sellerlocation: " + sellerlocation);
			var itemid = req.body.itemid;
			console.log("itemid" + itemid);

logger.eventLogger.debug("Event:AddtoCart :Adding Item to" +req.session.username+ "cart,Item id:"+itemid);


var json_responses = {};
if(req.session.username)
	{

	console.log("Adding into Cart for "+ req.session.username);
	
	var msg_payload = { 
			"email" : req.session.username,
			"itemid": itemid
			
		
			};
	
	mq_client.make_request('addToCart_queue',msg_payload, function(err,results){

		if(err){
		console.log(err);
		json_responses = {"statusCode" : 405} ;
		res.send(json_responses);
		
		}
		else 
		{
			
			console.log(results);
			
			if(results.statusCode == 200)

				{
				
				console.log("Items Stored into carts");

				console.log("Results: " + results);

				
				json_responses = {"statusCode" : 200 } ;
				console.log(json_responses);
				res.send(json_responses);
				
				}
			else if(results.statusCode == 401)
			{
				console.log("Cannot store Items into Cart");

				 json_responses = {"statusCode" : 401 };
				console.log(json_responses);
				res.send(json_responses);
			

			}
									
		}  
	});


		}

});


module.exports = router;
