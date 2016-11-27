var itemSchema = require('./model/item');
var Item = itemSchema.Item;  //Instance for MongoDB



function showAllFixedItems(msg, callback){
	
	var res = {};
	
	
	console.log("Email in Handle Req:" + msg.email);
	
	Item.find({email:{$ne:msg.email},forbid: {$ne: true},itemremqty :{ $gt:0 }},function (err,item){
		
		if(err)
		{
		throw err;
		} 
		if(!item)
		{
				
				console.log("No items found");
				res.statusCode = "402";
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


function showBidItems(msg, callback){
	
	var res = {};
	
	
	console.log("Email in Handle Req:" + msg.email);
	
	Item.find({email:{$ne:msg.email},forbid: {$ne: false},itemremqty :{ $gt:0 }},function (err,item){
		
		if(err)
		{
		throw err;
		} 
		if(!item)
		{
				
				console.log("No items found");
				res.statusCode = "402";
				res.value = "Items not Found";
				callback(null, res);
				
		}	else if(item)
			
			{	
			
				  
			      res.items = item;
			      res.statusCode = "200";
			      callback(null, res);
		
			
			}
	
	
	
	
	
	});

}
exports.showAllFixedItems = showAllFixedItems;
exports.showBidItems = showBidItems;
