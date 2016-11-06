var itemSchema = require('./model/item');
var Item = itemSchema.Item;  //Instance for MongoDB


function bidupdate_request(msg, callback){
	
	var res = {};
	
	
	console.log("Email in Handle Req:" + msg.email);
	var itemid = msg.itemid;
	console.log("itemid"+itemid);
	var bidprice = msg.bidprice;
	console.log("bidprice:"+bidprice);
	
	
Item.findOne({"_id":msg.itemid},function (err,item){
		
	console.log("Finding bid item");
	console.log(item);
		if(err)
		{
		throw err;
		} 
		if(!item)
		{
				
				console.log("Bid  items not found");
				res.statusCode = "401";
				callback(null, res);
				
		
		}	else if(item)
			
			{	
				  
				  if(item.bidprice<msg.bidprice)
					  {
					  	console.log(item._bidprice+"<"+msg.bidprice);
					  	
					  	var query = { _id:msg.itemid };
				    	// var options = { multi: true };
				    	 
				    	 var update = {"bidprice":msg.bidprice,
				    			 		"biduser":msg.email};
				    	 
				    	
				    	 
				    	Item.update(query, { $set: update},function(err,WriteResult) {
				    	  
				        
				    	
				        if(err)
				    		  {
				    		  throw err;
				    		  } 
				    		  
				    	  	else if(WriteResult.nModified>0){
				    			
				    			  console.log("Updated Bid Price");
				    			  res.statusCode = "200";
				    			  callback(null, res);
				    		  }
				    		  		
				    	  		else if(WriteResult.nModified==0)
				    				  {
				    	  				
				    	 console.log("Did not update the Bid Price since bid price was less than existing bid price ");
					    			  res.statusCode = "200";
					    			  callback(null, res);
				    		  			
				    				  } 
				    	  	
				    	    
				    		
				      
				      
				       });
				    
					  
					  	
					  }
					  	
					  	
					  	
					  	
		
			
			}
	
	
	
	
	
	});
	
	
				  
	
	 
	
				  
				
}
exports.bidupdate_request=bidupdate_request;