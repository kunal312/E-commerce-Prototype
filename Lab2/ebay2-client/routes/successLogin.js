var mysql = require('./mysql');
var express = require('express');
var router = express.Router();
var mq_client = require('../rpc/client');

router.post('/successLogin',function(req,res,next)

{
	var json_responses={};
	if(req.session.username)
	{
		//Set these headers to notify the browser not to maintain any cache for the page being loaded
		res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
		
		//Record the login time

			var msg_payload = { 
					"email" : req.session.username
			};

			
			mq_client.make_request('lastlogin_queue',msg_payload, function(err,results){

				if(err){
					throw err;
				}
				else 
				{
					
					console.log(results);
					
					if(results.statusCode == 200)

						{
						
						console.log("results");


						console.log("Last Login in Success:" +results.previouslogintime);

						json_responses = {"statusCode" : 200, "username" : req.session.username,"lastlogin" : results.previouslogintime};
						console.log(json_responses);
						res.send(json_responses);
						
						}
					else if(results.statusCode == 401)
					{
						console.log("Cannot record last login time for user");


					}
											
				}  
			});

		

			
			
			
			
			
			
			
		
	}

	else
	{
		
			json_responses = {"statusCode" : 401 };
				console.log(json_responses);
				res.send(json_responses);


	}


});








module.exports = router;
