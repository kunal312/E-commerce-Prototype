var ejs = require("ejs");
var mysql = require('./mysql');
var express = require('express');
var router = express.Router();



router.post('/logout',function(req,res,next)

{

	console.log("logging out");
	req.session.destroy();
	console.log("Session Destroyed")
	json_responses = { "statusCode" : 200};
    res.send(json_responses);								
	
})

module.exports = router;