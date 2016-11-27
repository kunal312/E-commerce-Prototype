var itemSchema = require('./model/item');
var Item = itemSchema.Item;  //Instance for MongoDB
var orderHistorySchema = require('./model/orderhistory.js');
var Orders = orderHistorySchema.OrderHistory;  //Instance for MongoDB




function sellinghistory_request(msg, callback){
	
	var res = {};
	
	
	console.log("Email in Handle Req:" + msg.email);
	
	Item.find({email:msg.email},function (err,item){
		
		if(err)
		{
		throw err;
		} 
		if(!item)
		{
				
				console.log("No items found");
				res.statusCode = "401";
				res.value = "Items not Found";
				callback(null, res);
				
		}	else if(item)
			
			{	
			
				  // item.toArray(function(err,docs){
			      //console.log("items: "+ docs);
			      res.items = item;
			      res.statusCode = "200";
			      callback(null, res);
		
			
			}
	
	
	
	
	
	});

}


function orderhistory_request(msg, callback){
	
	var res = {};
	
	
	console.log("Email in Handle Req:" + msg.email);
	
	Orders.find({email:msg.email},function (err,item){
		
		if(err)
		{
		throw err;
		} 
		if(!item)
		{
				
				console.log("No items found in orderhistory");
				res.statusCode = "401";
				res.value = "Items not Found";
				callback(null, res);
				
		}	else if(item)
			
			{	
			
			console.log("Fetched items  orderhistory");
				
				  
			      res.items = item;
			      res.statusCode = "200";
			      callback(null, res);
		
			
			}
	
	
	
	
	
	});

}


exports.sellinghistory_request = sellinghistory_request;
exports.orderhistory_request =orderhistory_request;
