var mysql = require('./mysql');
var express = require('express');
var router = express.Router();
var logger = require('./winston');
var mq_client = require('../rpc/client');

router.post('/viewCart',function(req,res,next)

{

	var email = req.session.username;
	console.log("Email for Viewing cart " +email);
	var json_response ={};

	if(req.session.username)
			{
		
		
		

logger.eventLogger.debug("Event:ViewCart :Fetching Items for " +req.session.username);



var msg_payload = { 
		"email" : req.session.username
		
		
};

mq_client.make_request('viewCart_queue',msg_payload, function(err,results){

	if(err){
		throw err;
	}
	else 
	{
		
		console.log(results);
		
		if(results.statusCode == 200)

			{
			
			console.log("Items Fetched from cart");
			console.log("Results:"+results.value);
			json_responses = {"statusCode" : 200,"items":results.value } ;
			//console.log(json_responses);
			res.send(json_responses);

			
			}
		else if(results.statusCode == 401)
		{
			console.log("No Items in Table");

			json_responses = {"statusCode" : 401 };
			console.log(json_responses);
			res.send(json_responses);

		}
								
	}  
});

















/*
		mysql.getItems(function(err,results){
		

		if(err){
			throw err;
		}
		else 
		{
			if(results.length > 0){

				console.log("Items Fetched from cart");

				itemlist = results;
				
				json_responses = {"statusCode" : 200,"items":itemlist } ;
				console.log(json_responses);
				res.send(json_responses);

			   }
			else {    
				
				console.log("No Items in Table");

					json_responses = {"statusCode" : 401 };
					console.log(json_responses);
					res.send(json_responses);
				
				
			}
		}  
	},getItems);

*/

/*

//Checking if Bid Expires:

var currentdate = new Date();

var getexpirydate= "select  * from items where bid=1 ";

mysql.getItems(function(err,results){
		

		if(err){
			throw err;
		}
		else 
		{
			if(results.length > 0){

				console.log("Date Fetched");


		for (var i=0;i<results.length;i++)
		
		{

			console.log("Current Date:" + currentdate);
			var expirydate = new Date(results[i].bidexpirydate);
			console.log("Exp Date:" + expirydate);
			var tdiff = (expirydate.getTime() - currentdate.getTime());
			var days = (tdiff / (1000 * 3600 * 24));
 			console.log("Remaining Days : "+days);
 				if(days<0)
 	{

logger.bidLogger.debug("Bid Won by user:"+results[i].biduser+", Highest Bid amount:"+results[i].bidprice+" for item id:"+results[i].itemid );


 			console.log("Bid Won");
 
 var updatecart = 

'INSERT INTO cartitems (emailid, itemqty, itemname,itemprice,itemdescription,itemseller,itemlocation,itemid) VALUES ("' + results[i].biduser + '", "1", "' + results[i].itemname + '", "' + results[i].bidprice + '","' + results[i].itemdescription + '","' + results[i].itemseller + '","' + results[i].itemlocation + '","' + results[i].itemid + '")';

	mysql.getItems(function(err,results1){
		

		if(err){
			throw err;
		}
		else 
		{
			console.log(results1);
			
			if(results1.affectedRows >0)
			{

				console.log("Sent to Cart");
				
									}
			else {    
				
				console.log("Cannot be added to cart");

				}


		}  
	},updatecart);


	//removing it from biding list
	var deletebid = 
	"update items set bid=0 where itemid='"+results[i].itemid+"'";


	mysql.getItems(function(err,results2){
		

		if(err){
			throw err;
		}
		else 
		{
			console.log(results2);
			if(results.length !=undefined){

				console.log("Removed from Bidding ");

				
				

			   }
			else {    
				
				console.log("Cannot be Removed from bidding ");

					
				
				
			}
		}  
	},deletebid);



				







				}






 				else

 				{
 					console.log("Bid Time is Remaining");
 				}



		}

				
				
				

			   }
			else {    
				
				console.log("Date cannot be Fetched");

					
				
				
			}
		}  
	},getexpirydate);


*/

			}


	
	else {

			json_responses = {"statusCode" : 401 };
					console.log(json_responses);
					res.send(json_responses);

		}
})


module.exports =router;