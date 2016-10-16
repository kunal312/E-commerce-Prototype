var ejs = require("ejs");
var mysql = require('./mysql');
var express = require('express');
var router = express.Router();
var logger = require('./winston');


router.post('/showbidItems',function(req,res,next)

{

	var email = req.session.username;
	console.log("Email for Bidding Items " +email);

	var currentdate = new Date();
	console.log("currentdate:" +currentdate);
	if(req.session.username)
			{
		
		

var getbidItems="select * from items where bid=1 and emailid<>'"+email+"'";
console.log("Query for Bid: " +getbidItems)

logger.eventLogger.debug("Event:Bid :Retrieving  Items  availabe for Bidding for user:" +req.session.username);

		mysql.getItems(function(err,results){
		

		if(err){
			throw err;
		}
		else 
		{
			if(results.length > 0){

				console.log(" Bid Items Fetched");

				biditemlist = results;
				
				json_responses = {"statusCode" : 200,"biditems":biditemlist } ;
				console.log(json_responses);
				res.send(json_responses);

			   }
			else {    
				
				console.log("No Items in Cart");

					json_responses = {"statusCode" : 401 };
					console.log(json_responses);
					res.send(json_responses);
				
				
			}
		}  
	},getbidItems);




			}


	
	else {



		}
})


module.exports =router;