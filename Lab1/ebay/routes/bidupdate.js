var ejs = require("ejs");
var mysql = require('./mysql');
var express = require('express');
var router = express.Router();
var logger = require('./winston');


router.post('/bidupdate',function(req,res,next)

{

			var email = req.session.username;
		console.log("Updating bid for User:"+email);

		var itemid= req.body.itemid;
		console.log("Item id :" +itemid);

		var bidprice=req.body.bidprice;
		console.log("Bid Price:" + bidprice);

	//Generating the log entries for thethe Bid
	
 
console.log("New bid for User:"+email+", New Bid amount:"+req.body.bidprice+" for item id:"+itemid);

logger.bidLogger.debug("New bid for User:"+email+", New Bid amount:"+req.body.bidprice+" for item id:"+itemid );








	




//Updating bId Price

var updatebid = "UPDATE items SET bidprice='"+bidprice+"',biduser='"+email+"'where itemid='"+itemid+"'and bidprice<'"+bidprice+"'";

mysql.putData(function(err,results)
							{
								console.log(results);
								if(err)
										{
										throw err;
										}

									else if(results.affectedRows > 0)

										{
							console.log("Bid Price Updated");
							json_responses = {"statusCode" : 200} ;
							console.log(json_responses);
							res.send(json_responses);

										}
										else{

											console.log("Bid Price not updated since bidprice less")
										json_responses = {"statusCode" : 200} ;
							console.log(json_responses);
							res.send(json_responses);

										}

						},updatebid);









})


module.exports=router;