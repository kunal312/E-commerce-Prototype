var mysql = require('./mysql');
var express = require('express');
var router = express.Router();


router.post('/successLogin',function(req,res,next)

{

	if(req.session.username)
	{
		//Set these headers to notify the browser not to maintain any cache for the page being loaded
		res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');

				json_responses = {"statusCode" : 200, "username" : req.session.username};
				console.log(json_responses);
				res.send(json_responses);
		
	}

	else
	{
		
			json_responses = {"statusCode" : 401 };
				console.log(json_responses);
				res.send(json_responses);


	}



});

module.exports = router;
