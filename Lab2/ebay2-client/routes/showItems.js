var ejs = require("ejs");
var express = require('express');
var router = express.Router();
var logger = require('./winston');
var mq_client = require('../rpc/client');


router.post('/showItems',function(req,res,next)

{


	//if(req.session.username)
		
	//{
		
		var json_responses ={};
		var email = req.session.username;
		console.log("Email for Fetching Items " +email);
	
				var msg_payload = { 
						"email" : email,
					
				};

				
	mq_client.make_request('showitems_queue',msg_payload, function(err,results){

					if(err){
						console.log("Error:");
						console.log("Error in Show Items:"+err);
						json_responses = {"statusCode" : 405} ;
						res.send(json_responses);
					
					}
					
					else {
						if(results.statusCode == 200)

						{
						
						console.log("Items Fetched");
						var itemlist = results.items;
						console.log("Item List:" + itemlist);
						json_responses = {"statusCode" : 200,"items":itemlist } ;
						console.log(json_responses);
						res.send(json_responses);

						
						}
					else if(results.statusCode == 401)
					{
						console.log("cannot get items");
						json_responses = {"statusCode" : 401 };
						console.log(json_responses);
						res.send(json_responses);


					}
					}
						
						
												
					
				});
			
		//}

});

module.exports =router;