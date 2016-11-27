var ejs = require("ejs");
var express = require('express');
var router = express.Router();
var logger = require('./winston'); 
var mq_client = require('../rpc/client');

var json_responses = {};
router.post('/updateProfile',function(req,res,next)
{

	console.log("Fetching profile information for user");

	if(req.session.username)

	{
		
		logger.eventLogger.debug("Event:Profile,Fetching Profile for User:"+req.session.username);
		
		
		
		
		
		
		var msg_payload = { 
				"email" : req.session.username
				
				
		};

		mq_client.make_request('fetch_queue',msg_payload, function(err,results){

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
					
					console.log("User Profile Fetched");
					console.log("profile"+ results.user);
					json_responses = {"statusCode" : 200,"profile":results.user } ;
					console.log(json_responses);
					res.send(json_responses);
					
					}
				else if(results.statusCode == 401)
				{
					//Code for user already exists
					console.log("Profile Cannot be Fetched");
					json_responses = {"statusCode" : 401 };
					console.log(json_responses);
					res.send(json_responses);


				}
										
			}  
		});




	
	
	
	
	
	
	}


	else

	{				
		
					console.log("User Not Logged In");
					json_responses = {"statusCode" : 401 };
					console.log(json_responses);
					res.send(json_responses);

	}



});


router.post('/profilechanges',function(req,res,next)
{

	if(req.session.username)
	{
		
						console.log("making changes to profile");

						var firstname =  req.body.firstname;
						var lastname= req.body.lastname;
						var userid=   req.body.userid;
						var contact= req.body.contact;
						var birthdate=    req.body.bday;
						var location= req.body.location;
						console.log(firstname+lastname+userid+contact+birthdate+location);
	
logger.eventLogger.debug("Event:UpdateProfile,Updating Profile for User:"+req.session.username);


var msg_payload = { 
		"email" : req.session.username,
		"firstname" : firstname,
		"lastname" :lastname,
		"userid":userid,
		"contact":contact,
		"birthdate":birthdate,
		"location":location
		
};

mq_client.make_request('upateprofile_queue',msg_payload, function(err,results){

	if(err){
		throw err;
	}
	else 
	{
		
		console.log(results);
		
		if(results.statusCode == 200)

			{
			
			console.log("Profile Information Updated");
			json_responses = {"statusCode" : 200 };
			console.log(json_responses);
			res.send(json_responses);
			
			}
		else if(results.statusCode == 401)
		{
		
			console.log("No Change in Profile");
			json_responses = {"statusCode" : 401 };
			console.log(json_responses);
			res.send(json_responses);


		}
								
	}  
});

	
}


else{

	console.log("User Not Logged in");
	json_responses = {"statusCode" : 401 };
										console.log(json_responses);
										res.send(json_responses);
}



})


module.exports= router;
