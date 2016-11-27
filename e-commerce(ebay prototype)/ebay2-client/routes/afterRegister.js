var ejs = require("ejs");
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt-nodejs');
var logger = require('./winston');
var mq_client = require('../rpc/client');


router.post('/afterRegister',function(req,res,next)
{
	console.log("registering user");


	var email = req.body.inputUsername;
	console.log("Email:" + email);
	var password = req.body.inputPassword;
	console.log("inputPassword:" + password);
	var firstname = req.body.inputFirstName;
	console.log("inputFirstName:" + firstname);
	var lastname = req.body.inputLastName;
	console.log("inputLastName:" + lastname);
	var enryptedpwd = bcrypt.hashSync(password);
	console.log("Encrypted Pwd:" + enryptedpwd);

	var msg_payload = { 
			"email" : email,
			"password" : password,
			"firstname" : firstname,
			"lastname":lastname
			
	};



if( req.param("inputUsername")!== undefined && req.param("inputPassword")!== undefined &&

	req.param("inputFirstName")!== undefined) 

{


logger.eventLogger.debug("Event:Register,Username:"+email);

console.log("Routes:afterRegister");

mq_client.make_request('registeruser_queue',msg_payload, function(err,results){

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
				console.log("User Created");
				json_responses = {"statusCode" : 200 };
				console.log(json_responses);
				res.send(json_responses);
				
				}
			else if(results.statusCode == 401)
			{
				//Code for user already exists
				console.log("User already Exists");
				json_responses = {"statusCode" : 401 };
				console.log(json_responses);
				res.send(json_responses);


			}
									
		}  
	});

}

else
{

			json_responses = {"statusCode" : 403 };
					console.log(json_responses);
					res.send(json_responses);
}



})

module.exports=router;