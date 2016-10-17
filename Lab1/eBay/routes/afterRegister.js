var ejs = require("ejs");
var mysql = require('./mysql');
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt-nodejs');
var logger = require('./winston');
var crypto = require('crypto');
var key = 'ebay_123';


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
	var enryptedpwd = crypto.createHmac('sha1', key).update(password).digest('hex');
	console.log("Encrypted Pwd:" + enryptedpwd);



if( req.param("inputUsername")!== undefined && req.param("inputPassword")!== undefined &&

	req.param("inputFirstName")!== undefined) 

{


logger.eventLogger.debug("Event:Register,Username:"+email);
//var getUser= "select * from users where emailid= "+req.param("inputUsername");
var getUser = "SELECT * FROM users WHERE `emailid` = '"+req.body.inputUsername+"'";
console.log("Query is:"+getUser);

mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			if(results.length > 0)

			{
				console.log("user already exists.");
				
				json_responses = {"statusCode" : 401 };
				console.log(json_responses);
				res.send(json_responses);
			
			}
			else 
			{    

				var updateusers = 'INSERT INTO users (emailid, password, firstname, lastname) VALUES ("' + req.body.inputUsername + '", "' + enryptedpwd + '", "' + req.body.inputFirstName + '", "' + req.body.inputLastName + '")';
				console.log(updateusers);
				mysql.putData(function(err,results)
							{
								if(err)
										{
										throw err;
										}

									else
										{
										console.log("user created");
				
										json_responses = {"statusCode" : 200 };
											console.log(json_responses);
										res.send(json_responses);

										}

						},updateusers);

				
				
				
			}
		}  
	},getUser);

}

else{

			json_responses = {"statusCode" : 403 };
					console.log(json_responses);
					res.send(json_responses);
}



})

module.exports=router;