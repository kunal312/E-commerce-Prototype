var ejs = require("ejs");
var mysql = require('./mysql');
var express = require('express');
var router = express.Router();


router.post('/afterSignIn',function(req,res,next)

{

	console.log("reached after sign in checking if user exists");

//function afterSignIn(req,res)
//{
																
	// check user already exists
	var getUser="select * from users where emailid='"+req.param("inputUsername")+"' and password='" + req.param("inputPassword") +"'";
	console.log("Query is:"+getUser);
	
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			if(results.length > 0){
				console.log("valid Login");

					 res.render('successLogin', { data: results } , function(err, result) {
					 	
			        // render on success
			        if (!err) {
			            res.end(result);
			        }
			        // render or error
			        else {
			            res.end('An error occurred');
			            console.log(err);
			        }
			    });



			   
			}
			else {    
				
				console.log("Invalid Login");

					json_responses = {"statusCode" : 401 };
					console.log(json_responses);
					res.send(json_responses);
				
				
			}
		}  
	},getUser);
//}








})







module.exports=router;
