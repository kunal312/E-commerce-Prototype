var ejs = require("ejs");
var mysql = require('./mysql');
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt-nodejs');
var logger = require('./winston');
var mq_client = require('../rpc/client');

router.post('/afterSignIn',function(req,res,next)

{


	console.log("reached after sign in checking if user exists");
	console.log("Username " +req.param("inputUsername"));
	console.log("Pwd " +req.param("inputPassword"));


if((req.param("inputUsername")!== undefined && req.param("inputPassword")!== undefined)) 
	

		{

	logger.eventLogger.debug("Event:SignIn,User:"+req.param("inputUsername"));
	var email = req.param("inputUsername");
	var password = req.param("inputPassword");
			var msg_payload = { 
					"email" : email,
					"password" : password,
			};

			
			
			mq_client.make_request('login_queue',msg_payload, function(err,results){

				if(err){
					throw err;
				}
				else 
				{
					
					console.log(results);
					
					if(results.statusCode == 200)

						{
						
						console.log("valid Login");
						req.session.username = email;
						console.log("Session initialized");
						email = req.param("inputUsername");
						json_responses = {"statusCode" : 200,"useremail":email } ;
						console.log(json_responses);
						res.send(json_responses);
						
						}
					else if(results.statusCode == 401)
					{
						console.log("Invalid Login");
						json_responses = {"statusCode" : 401 };
						console.log(json_responses);
						res.send(json_responses);


					}
											
				}  
			});

		
		
		
		}

		
	
	
	
	   else
		{
				var json_responses = {"statusCode" : 403 };
					console.log(json_responses);
					res.send(json_responses);
		}









});







module.exports=router;
