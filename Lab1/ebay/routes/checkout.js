var ejs = require("ejs");
var mysql = require('./mysql');
var express = require('express');
var router = express.Router();

router.post('/checkout', function(req,res,next)

{

	console.log("Length=" +req.body.itemstobuy.length);

	var email = req.session.username;

	 console.log("Checking Out Items for User " +email);

	 var datepurchased = new Date();
	 console.log(datepurchased);

	 var actualremqty;

	 var i;
			
	
if(req.session.username)
			
{
	
	 console.log("Session Exists");
	for (i=0;i<req.body.itemstobuy.length;i++)
		
			 
{

				var itemid= req.body.itemstobuy[i].itemid;
				var itemqty = req.body.itemstobuy[i].itemqty
				console.log("item quantity received from user:"+itemqty);
				var itemname=req.body.itemstobuy[i].itemname;
				var itemprice=req.body.itemstobuy[i].itemprice;


 		var remqty = "select itemqty,itemname,itemid,itemprice from items where itemid="+itemid+"";
 		console.log("Rem Qty:" + remqty);

				mysql.putData(function(err,results)
					{
												
					if(err)
					{
						console.log(err);
					}	
			else{
								   
			 for (i=0;i<results.length;i++)
			   		{
			  		console.log("Actual Rem Qty:"+results[i].itemqty);

			  		actremqty=results[i].itemqty;
			  		 		if(actremqty>=itemqty)
			  			{
  					console.log("Order can be placed for " + results[i].itemname+" quantity verified");

//For inserting into oder history table
  	var orderhistoryquery = 

'INSERT INTO orderhistory (emailid, itemid, itemqty, itemname,itemprice,purchasedate) VALUES ("' + email + '", "' + results[i].itemid + '", "' + itemqty + '", "' + results[i].itemname + '","' + results[i].itemprice + '","' + datepurchased + '")';

console.log(orderhistoryquery);

		mysql.putData(function(err,results)
							{
								if(err)
										{
										throw err;
										}

									else
										{
										console.log("user registered");

										}

						},orderhistoryquery);

			console.log("Order History updated");

//For Updating Quantity in main items table

 var updateqty = actremqty - req.body.itemstobuy[i].itemqty;

 console.log("Update Quantity="+updateqty);

var updatequery = "UPDATE items SET itemqty='"+updateqty+"'where itemid='"+results[i].itemid+"'";

console.log("Update Query:" + updatequery);

mysql.putData(function(err,results)
							{
								if(err)
										{
										throw err;
										}

									else
										{
										console.log("Qty updated");

										}

						},updatequery);

//For Deleting Items from users cart

var deleteitem = "Delete from cartitems where emailid='" +req.session.username+ "'and itemid='"+results[i].itemid+"'"; 

console.log("Update Query:" + deleteitem);

mysql.putData(function(err,results)
							{
								if(err)
										{
										throw err;
										}

									else
										{
										console.log("Item Deleted");

										}

						},deleteitem);


					//Sending Success Status Code/Response back 
					json_responses = {"statusCode" : 200 };
					console.log(json_responses);
					res.send(json_responses);




  		 		}
  				else
  				{
  					console.log("Order Cannot be Placed since quantity remaining is less")
  					json_responses = {"statusCode" : 401,"item" : results[i].itemname };
					console.log(json_responses);
					res.send(json_responses);

  				}
      	}
	}
},remqty);

}




			}

	else{
		console.log("Session does not exists.");
	

		}

})

module.exports=router;
