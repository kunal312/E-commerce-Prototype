var ejs = require("ejs");
var mysql = require('./mysql');
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt-nodejs');
var logger = require('./winston');
var crypto = require('crypto');
var key = 'ebay_123';

router.post('/afterSignIn',function(req,res,next)

{


	console.log("reached after sign in checking if user exists");
	console.log("Username " +req.param("inputUsername"));
	console.log("Pwd " +req.param("inputPassword"));
	var enryptedpwd = crypto.createHmac('sha1', key).update(req.param("inputPassword")).digest('hex');
	console.log("Encrypted Pwd:" + enryptedpwd);



	

	if((req.param("inputUsername")!== undefined && req.param("inputPassword")!== undefined)) 
	

		{
	var getUser="select emailid from users where emailid='"+req.param("inputUsername")+"' and password='"+enryptedpwd+"'";

	logger.eventLogger.debug("Event:SignIn,User:"+req.param("inputUsername"));

	console.log("Query is:"+getUser);

	var username = req.param("inputUsername");
	
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else if(results.length > 0)


			{


					
					console.log(results);
											
							console.log("valid Login");
							req.session.username = username;
							console.log("Session initialized");
							email = req.param("inputUsername");
							console.log("Email :" +email);

							json_responses = {"statusCode" : 200,"useremail":email } ;
							console.log(json_responses);
							res.send(json_responses);
						
			   }
								else  {    
				
											console.log("Invalid Login");
											json_responses = {"statusCode" : 401 };
											console.log(json_responses);
											res.send(json_responses);

										}


				
			
		 
	},getUser);

		}

		else
		{
				json_responses = {"statusCode" : 403 };
					console.log(json_responses);
					res.send(json_responses);
		}









})







module.exports=router;
