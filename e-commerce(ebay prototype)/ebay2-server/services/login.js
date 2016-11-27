var newuserSchema = require('./model/newuserSchema');
var User = newuserSchema.User;  //Instance for MongoDB

function login_request(msg, callback){
	
	var res = {};
	console.log("In handle request:"+ msg.email);
	
	User.findOne({"email": msg.email},function (err,user){
		
		if(err)
			{
			throw err
			} 
			
		
		if(!user)
			{
					console.log("No user with this email found")
					res.statusCode = "402";
					res.value = "Email not Found";
					callback(null, res);
					
			}	
					
					else if(!user.validatePassword(msg.password)){
					
					console.log("Invalid Password");
					res.statusCode = "401";
					res.value = "Failed Login";
					callback(null, res);
							}	
								else{
								
								res.statusCode = "200";
								res.value = "Succes Login";
								callback(null, res);
							}
					
});
	
	
}


function lastlogin_request(msg, callback){
	
	var res = {};
	console.log("In handle request:"+ msg.email);
	
	User.findOne({"email": msg.email},function (err,user){
		
		if(err)
			{
			throw err
			} 
			
		
		if(!user)
			{
					console.log("No user with this email found")
					res.statusCode = "402";
					res.value = "Email not Found";
					callback(null, res);
					
			}	
					
			else{
								
								
								var previouslogintime = user.lastlogin;	
								console.log("previouslogintime" + previouslogintime);
								
								var newlogintime = new Date();
								console.log("New Login Time:" + newlogintime);
								
					var query = { email: msg.email };
							   
							    	 
					var update = {lastlogin:newlogintime };
				
					User.update(query, { $set: update},function(err,WriteResult)
								{
									
							  		console.log("Saving New Login Time For User");
							
							  		if(err)
							  		{
							  			console.log(err);
							  		
							  			
							  		}
							  		else
							  		
							  		{
							  			    
											console.log("Saved New Login Time for User");
											res.statusCode = "200";
											res.previouslogintime = previouslogintime;
											console.log("previouslogintime" + previouslogintime);
											callback(null, res);
											
							  		}
							
											
									
							  });
								
								
								
							
				}
					
});
	
	
}





exports.login_request = login_request;
exports.lastlogin_request = lastlogin_request;