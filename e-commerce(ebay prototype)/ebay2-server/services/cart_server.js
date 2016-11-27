var cartSchema = require('./model/cart');
var Cart = cartSchema.Cart;  //Instance for MongoDB
var itemSchema = require('./model/item');
var Item = itemSchema.Item;  //Instance for MongoDB


function addToCart_request(msg, callback){
	
	var res = {};

	
	
	console.log("Email in Handle Req:" + msg.email);
	
	//Checking if product is already in the cart
	Cart.findOne({"email":msg.email,"cartitems":msg.itemid},function (err,item){
		console.log("Item:"+item);
		if(err){
			console.log(err);
			
		}
		if(item)
			
		{
			console.log("Item is already in the cart,increasing the qty");
			res.statusCode = "200";
			console.log("New alredy in the cart");
			callback(null, res);
			
			
		
		
		
		}
		
		else if(!item)
			{
			var itemid = msg.itemid;
			console.log("itemid"+itemid);
			var newItemCart = new Cart();
			 newItemCart.email = msg.email;
			 newItemCart.cartitems = itemid;
	
			 
			 newItemCart.cartitemqty = 1;
			 
			 
			 newItemCart.save(function(err){
					
			  		console.log("Saving New Item");
			
			  		if(err)
			  		{
			  			console.log("cannot save the item");
			  			throw err;
			  			
			  		}
			  		else
			  		{
			  			    res.statusCode = "200";
							
							console.log("New Item added");
							callback(null, res);
							
			  		}
			
							
					
			  });
			
			}
		
		
	});
		  
				  
	
	 
	 
				  
				
} //addtocart closing

function viewCart_request(msg, callback){
	//for Populating Items from Cart
	var res = {};
	
	
	console.log("Email in Handle Req:" + msg.email);
	
Cart
	.find({ email:msg.email })
	.populate('cartitems') 
	.exec(function (err, cartitems) {
	  if (err){
		  
		  console.log(err);
	  }
	  
	  if(cartitems)
		  { 
		  
		  	console.log('Items retrieved from cart', cartitems);
		  	res.statusCode = "200";
		  	res.value = cartitems;
			console.log("Items retrieved");
			callback(null, res);
		  
		  }
	 
	});
				  
//Checking if Bid Expired
var currentdate = new Date();

Item.find({forbid: true ,itemremqty :{ $gt:0 }},function (err,item){
	console.log("Bid Expiry items:"+item);
	if(err)
	{
	throw err;
	} 
	if(!item)
	{
			
			console.log("No bid items found");
			
	}	
	
	else if(item)
		
		{	
		
				item.forEach(function(biditems,index){
				console.log("*********Bid Items*********");
					
				console.log("Current Date:" + currentdate);
				var expirydate = biditems.bidexpirydate;
				console.log("Exp Date:" + expirydate);
				console.log("current date:"+currentdate.getTime());
				var tdiff = (expirydate.getTime() - currentdate.getTime());
				var days = (tdiff / (1000 * 3600 * 24));
	 			console.log("Remaining Days : "+days);
	 			if(days<0)
	 			
	 			{
	 					
	 			console.log("Bid Won");
	 			
	 			//Adding the items into users cart
	 			var newItemCart = new Cart();
	 			newItemCart.email = biditems.biduser;
	 			console.log("Bid won By User: "+newItemCart.email);
	 			newItemCart.cartitems = biditems._id;
	 			console.log("For Item:"+newItemCart.cartitems);
	 						  
	 			
	 			 
	 			 newItemCart.save(function(err){
	 					
	 			  		console.log("Saving New Item into users cart");
	 			
	 			  		if(err)
	 			  		{
	 			  			console.log("cannot save the item");
	 			  			throw err;
	 			  			
	 			  		}
	 			  		else
	 			  		{
	 			  			    console.log("Saved the item into user cart");
	 							
	 			  		}
	 			
	 							
	 					
	 			  });
	 				
	 			 //Deleting the item from bidview
	 	 
	 			Item.findOne({"_id": biditems._id},function (err,item1){
	 		 		console.log(item1);
	 		 		if(err)
	 		 			{
	 		 			console.log(err);
	 		 			}
	 		 		if(item1)
	 		 			{
	 		 			
	 		 			
	 		 		var query1 = { "_id": biditems._id };
	 			    	
	 			    console.log("Updating bid price into item"+item1.bidprice);
	 			    
	 			    var update1 = {"forbid": null,
	 			    			 		"itemprice":item1.bidprice };
	 			    	 
	 			    Item.update(query1, { $set: update1},function(err,WriteResult) {		
	 			    		 
	 			   console.log("updating the bid price and setting the bid flag to null");
	 			    	if(err)
	 		    		  {
	 		    		  throw err;
	 		    		  } 
	 		    		  
	 		    	  	else if(WriteResult.nModified>0){
	 		    			
	 		    			  console.log("Updated Item with new bid price");
	 		    			 
	 		    		
	 		    		  }
	 		    		  		
	 		    	  		else if(WriteResult.nModified==0)
	 		    				  {
	 		    	  				
	 		    		  	 console.log("Cannot update the price");
	 		    		  			 
	 		    		  			
	 		    				  } 
	 			    	 
	 			    	 
	 			    	 
	 			    	 
	 			    	 });
	 			    	 
	 		 			}
	 		 			
	 		 			
	 		 			
	 		 				
	 		 		
	 		 	}); 
	 			 
	 			
	 			
	 			
	 			
	 			
	 			
	 			
	 			
	 			
	 			
	 			
	 			
	 			
	 	}//If for bid expiry closes
	 			 
	 			 
	 				else
				 			{
				 				
				 				console.log("Bid Time Remainng");
				 			}
				
				
				
				
					
				});
			  
		
		}





});










}//function for view cart closes



function removeCart_request(msg, callback){
	
	var res = {};
	
	
	console.log("Email in Handle Req:" + msg.email);
	console.log("Item to Remove " + msg.itemid);
	
	
	Cart.remove({ email:msg.email,cartitems:msg.itemid },function (err, WriteResult) {
	  if (err){
		  
		  console.log(err);
	  }
	  
	 
	  console.log("No of items removed:"+ WriteResult);
			  	console.log("Items Deleted from from cart");
			  	res.statusCode = "200";
				console.log("Items Deleted");
				callback(null, res);
			  
			 
		  	
		  
	  
	});
				  
}


exports.addToCart_request = addToCart_request;
exports.viewCart_request = viewCart_request;
exports.removeCart_request = removeCart_request;