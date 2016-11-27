var itemSchema = require('./model/item');
var Item = itemSchema.Item;  //Instance for MongoDB



function sellFixedItemsrequest(msg, callback){
	
	var res = {};
	
	
	console.log("Email in Handle Req:" + msg.email);
	
	
	var itemname = msg.itemname;
	var itemdescription = msg.itemdescription;
	var itemprice = msg.itemprice;
	var itemremqty = msg.itemremqty;
	var itemtotalqty = msg.itemtotalqty;
	var sellerlocation = msg.sellerlocation;
	var sellername = msg.sellername;
	
	console.log("itemname"+ itemname);
	console.log("sellerlocation" + sellerlocation);
	
   		  		
				  var item = new Item();
				         
				     item.email = msg.email;
				     item.itemname = msg.itemname;
				  	 item.itemdescription = msg.itemdescription;
					 item.itemprice = msg.itemprice;
					 item.itemremqty = msg.itemremqty;
					 item.itemtotalqty = msg.itemtotalqty;
					 item.sellerlocation = msg.sellerlocation;
					 item.sellername = msg.sellername;
				  
				  
			      
				  
				  item.save(function(err){
			
			  		console.log("Storing item details into dtabase");
			
			  		if(err)
			  		{
			  			console.log("cannot save item details");
			  			throw err;
			  			
			  		}
			  	
			  		
			  		if(item._id)
			  		{
			  			console.log("Item Id: " + item._id);
			  			res.statusCode = "200";
		  				console.log("Item details saved");
						callback(null, res);
			  		} 

			  });
			
}


function sellBidItemsrequest(msg, callback){
	
	var res = {};
	
	
	console.log("Email in Handle Req:" + msg.email);
	
	
	var itemname = msg.itemname;
	var itemdescription = msg.itemdescription;
	var itemprice = msg.itemprice;
	var itemremqty = msg.itemremqty;
	var itemtotalqty = msg.itemtotalqty;
	var sellerlocation = msg.sellerlocation;
	var sellername = msg.sellername;
	
	var bidstartdate = new Date();
	console.log("bidstartdate:"+ bidstartdate);
	var bidexpirydate= new Date(Date.now()+4*24*60*60*1000);
	console.log("bidexpirtydate: "+ bidexpirydate);
	
	
   		  		
				  var item = new Item();
				         
				     item.email = msg.email;
				     item.itemname = msg.itemname;
				  	 item.itemdescription = msg.itemdescription;
					 item.itemprice = msg.itemprice;
					 item.itemremqty = msg.itemremqty;
					 item.itemtotalqty = msg.itemtotalqty;
					 item.sellerlocation = msg.sellerlocation;
					 item.sellername = msg.sellername;
					 item.bidprice=0;
					 item.biduser =null;
					 item.bidstartdate=bidstartdate;
					 item.bidexpirydate=bidexpirydate;
					 item.forbid = true;
				  
				  
			      
				  
				  item.save(function(err){
			
			  		console.log("Storing Bid item details into dtabase");
			
			  		if(err)
			  		{
			  			console.log("cannot save item details");
			  			throw err;
			  			
			  		}
			  	
			  		
			  		if(item._id)
			  		{
			  			console.log("Item Id: " + item._id);
			  			res.statusCode = "200";
		  				console.log("Item details saved");
						callback(null, res);
			  		} 

			  });
			
}

	  	
exports.sellFixedItemsrequest = sellFixedItemsrequest;
exports.sellBidItemsrequest = sellBidItemsrequest;