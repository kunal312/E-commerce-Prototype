var orderHistorySchema = require('./model/orderhistory.js');
var OrderHistory = orderHistorySchema.OrderHistory;  //Instance for MongoDB
var cartSchema = require('./model/cart');
var Cart = cartSchema.Cart;  //Instance for MongoDB
var itemSchema = require('./model/item');
var Item = itemSchema.Item;  //Instance for MongoDB		


function validatePayment_request(msg, callback){
	
	var res = {};
	
	
	console.log("Email in Handle Req:" + msg.email);
	console.log("cardnumber " + msg.cardnumber);
	
	if(msg.cardnumber.length!==16)
	{

		console.log("Invalid Card Number");
		res.statusCode = "401";
		callback(null, res);
	
	}
		
else
	{
	console.log("Payment Authorized ");
	res.statusCode = "200";
	callback(null, res);
	}
				  
}

function checkoutItems_request(msg, callback){
	
	var res = {};
	var i =0;
	
	console.log("Email in Handle Req:" + msg.email);
	console.log("Items to Buy: " + msg.itemstobuy);
	
	msg.itemstobuy.forEach(function(itemstobuy, index) {
			
	
	
	Item.findOne({_id: itemstobuy.itemid},function (err, item) {
		i++;
	if(item.itemremqty>=itemstobuy.itemqty)
		{
		
		
		console.log("Value of I" +i);
		console.log("length:"+msg.itemstobuy.length);
		
		if(i==msg.itemstobuy.length) 
		{
		
		console.log("*****Order Placed******");
		res.statusCode = 200;
		
		callback(null,res);
		
		}
		
		
		
	 	console.log("********Executing For Each************");
	  	var itemid= itemstobuy.itemid;
	 	console.log("item Id received from user:"+itemid);
		var itemqty = itemstobuy.itemqty;
		console.log("item quantity received from user:"+itemqty);
		var itemname=itemstobuy.itemname;
		console.log("item Name received from user:"+itemname);
		var itemprice=itemstobuy.itemprice;
		console.log("item Price received from user:"+itemprice);
		
		//Inserting the item into Users OrderHistory Table
		
		 var newOrder = new OrderHistory();
		 newOrder.email = msg.email;
		 newOrder.itemname=itemname;
		 newOrder.itemqty=itemqty;
		 newOrder.purchasedate=new Date();
		 newOrder.itemprice=itemprice*itemqty;
		 
		 
		 newOrder.save(function(err){
				
		  		console.log("Saving New Order into table");
		
		  		if(err)
		  		{
		  			console.log("cannot save the item into orderhistory");
		  			throw err;
		  			
		  		}
		  		else
		  		{
		  			   console.log("Inserted item into users orderhistory");
						
		  		}
		
		});
		 
		//Deleting Item from Users Cart
		 
		 console.log("Email in Handle Req:" + msg.email);
			console.log("*******Item to Remove*********s" + itemstobuy.itemid);
			
			
			Cart.remove({ email:msg.email,cartitems:itemstobuy.itemid },function (err, WriteResult) {
			  if (err){
				  
				  console.log(err);
			  }
			  
			 
			  console.log("No of items removed:"+ WriteResult);
					  	console.log("Items Deleted from from cart");
					  	
					  
					 
		});
		 
		 
	//Updating Quantity in Items table for the respective item
		
		
	
	Item.findOne({_id: itemstobuy.itemid},function (err, item) {
		
		if(err)
			{
			
			console.log(err);
			}
		
		if(item)
			{
			
			
			console.log("***Update Id:**"+item._id+"***Update qty:**"+item.itemremqty);
			var query = { _id: item._id };
			var newqty = item.itemremqty- itemstobuy.itemqty;
			console.log("New Qty:"+newqty);
			var update = {itemremqty:newqty};
			
			
	 		
			 Item.update(query, { $set: update},function(err,WriteResult) {
				    	  
					        console.log("Number of Documents Updated " + WriteResult);
					    	
					        if(err)
					    		  {
					    		  throw err;
					    		  } 
					    		  
					    	  	else if(WriteResult.nModified>0){
					    			
					    			console.log("Item qty updated for id:" + item._id);
					    			 // callback(null, res);
					    		 
					    	  	}
					    		  		
					    	  		else if(WriteResult.nModified==0)
					    				  {
					    	  				console.log("Not updated the qty");
					    		  			 
					    		  			
					    				  } 
					    	  	
					    	    
		   });
			
			
			
			
			
			}
		
	
	

	
	});
			
	
	
		
		
		
		}
	
	else
		
		{
		
		console.log("Quantity not avaialble for item"+itemstobuy.itemid+"Item Name "+itemstobuy.itemname);
		res.statusCode = 401;
		res.items= itemstobuy.itemname;
		callback(null,res);
	
		}
	
	});//First Item Find closes
		
	
				
		
});//for each closes
	
	
			  
}

exports.validatePayment_request = validatePayment_request;
exports.checkoutItems_request = checkoutItems_request;