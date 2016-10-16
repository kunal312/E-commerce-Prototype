var mysql = require('./mysql');
var express = require('express');
var router = express.Router();


router.post('/successLogin',function(req,res,next)

{

	if(req.session.username)
	{
		//Set these headers to notify the browser not to maintain any cache for the page being loaded
		res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');



		//Record the login time

			var logintime = new Date();
			console.log("Current Login Time" + logintime);


			var getlastlogin= "select lastlogin from users where emailid='"+req.session.username+"'";
			mysql.getItems(function(err,results){
		

								if(err){
										throw err;
										}
								else if(results.length > 0)

								{

										console.log("Got last login time from user");

										console.log("results");
				
										req.session.lastlogin =results[0].lastlogin;
										console.log("Last login :" + req.session.lastlogin);


										var recordlogin = "Update users SET lastlogin='"+logintime+"' where emailid='"+req.session.username+"'";


										mysql.getItems(function(err,results)
										{

		

												if(err){
															throw err;
														}
											else if(results != undefined)

											{

													console.log("Recorded Current Login time for user");

													console.log("results");


													console.log("Last Login in Success:" +req.session.lastlogin);

													json_responses = {"statusCode" : 200, "username" : req.session.username,"lastlogin" : req.session.lastlogin};
													console.log(json_responses);
													res.send(json_responses);

											}
													else {    
						
														console.log("Cannot record last login time for user");

														}
				
				
			
												  
									},recordlogin);

						}  
	},getlastlogin);




				
		
	}

	else
	{
		
			json_responses = {"statusCode" : 401 };
				console.log(json_responses);
				res.send(json_responses);


	}


	





});








module.exports = router;
