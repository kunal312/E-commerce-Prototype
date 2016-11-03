var cartSchema = require('./model/cart');
var Cart = cartSchema.Cart;  //Instance for MongoDB


function addToCart_request(msg, callback){
	
	var res = {};
	
	
	console.log("Email in Handle Req:" + msg.email);
	
	
	var itemid = msg.itemid;
	console.log("itemid"+itemid);
	
	 var newItemCart = new Cart();
	 newItemCart.email = msg.email;
	 newItemCart.cartitems = itemid;		  
				  
	
	 
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

function viewCart_request(msg, callback){
	
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
		  { console.log('Items retrieved from cart', cartitems);
		  	res.statusCode = "200";
		  	res.value = cartitems;
			console.log("Items retrieved");
			callback(null, res);
		  
		  }
	  
	 
	
	  
	  
	})
				  
}



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