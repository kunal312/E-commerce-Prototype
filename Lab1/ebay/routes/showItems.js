var ejs = require("ejs");
var mysql = require('./mysql');
var express = require('express');
var router = express.Router();


router.post('/showItems',function(req,res,next)

{

	var email = req.session.username;
	console.log("Email for Fetching Items " +email);

	if(req.session.username)
			{
		
		
var getItems="select * from items where emailid<>'"+email+"'";


		mysql.getItems(function(err,results){
		

		if(err){
			throw err;
		}
		else 
		{
			if(results.length > 0){

				console.log("Items Fetched");

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




			}


	
	else {



		}
})


module.exports =router;