var mysql = require('./mysql');
var express = require('express');
var router = express.Router();


router.post('/viewCart',function(req,res,next)

{

	var email = req.session.username;
	console.log("Email for Viewing cart " +email);

	if(req.session.username)
			{
		
		
		var getItems="select * from cartitems where emailid='"+email+"'";


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




			}


	
	else {



		}
})


module.exports =router;