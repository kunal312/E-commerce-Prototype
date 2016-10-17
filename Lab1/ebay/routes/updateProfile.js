var ejs = require("ejs");
var mysql = require('./mysql');
var express = require('express');
var router = express.Router();
var logger = require('./winston'); 


router.post('/updateProfile',function(req,res,next)
{

	console.log("Fetching profile information for user")

	if(req.session.username)

	{

	var getProfile="select firstname,lastname,username,phone,birthdate,location from users where emailid='"+req.session.username+"'";

	logger.eventLogger.debug("Event:Profile,Fetching Profile for User:"+req.session.username);
	mysql.getItems(function(err,results){
		

		if(err){
			throw err;
		}
		else 
		{
			if(results.length > 0){

				console.log("Fetching Profile Information from user");

				console.log("results");
				
				json_responses = {"statusCode" : 200,"profile":results } ;
				console.log(json_responses);
				res.send(json_responses);

			   }
			else {    
				
				console.log("User Information Not Found");

					json_responses = {"statusCode" : 401 };
					console.log(json_responses);
					res.send(json_responses);
				
				
			}
		}  
	},getProfile);







	}


	else

	{				console.log("User Not Logged In")
					json_responses = {"statusCode" : 401 };
					console.log(json_responses);
					res.send(json_responses);

	}



})


router.post('/profilechanges',function(req,res,next)
{

	if(req.session.username)
	{
		console.log("making changes to profile")

						firstname =  req.body.firstname;
						lastname= req.body.lastname;
						userid=   req.body.userid;
						contact= req.body.contact;
						birthdate=    req.body.bday;
						location= req.body.location;
						console.log(firstname+lastname+userid+contact+birthdate+location);
	


logger.eventLogger.debug("Event:UpdateProfile,Updating Profile for User:"+req.session.username);


var updatequery = "UPDATE users SET firstname='"+firstname+"',lastname='"+lastname+"',username='"+userid+"',phone='"+contact+"',birthdate='"+birthdate+"',location='"+location+"' where emailid='"+req.session.username+"'";


console.log("profilechange");

	mysql.putData(function(err,results)
							{
								if(err)
										{
										throw err;
										}

									else
										{
										console.log("Profile Information Updated");
										json_responses = {"statusCode" : 200 };
										console.log(json_responses);
										res.send(json_responses);

										}

						},updatequery);





}


else{

	console.log("User Not Logged in");
	json_responses = {"statusCode" : 401 };
										console.log(json_responses);
										res.send(json_responses);
}



})


module.exports= router;
