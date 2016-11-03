var newuserSchema = require('./model/newuserSchema');
var User = newuserSchema.User;  //Instance for MongoDB



function handle_request(msg, callback){
	
	var res = {};
	
	
	console.log("Email in Handle Req:" + msg.email);
	var email = msg.email;
    var password = msg.password;
    var firstname = msg.firstname;
    var lastname = msg.lastname;
   
    User.findOne({"email": msg.email},function(err,user) {
	  
	  if(err)
		  {
		  throw err;
		  } 
		  else if(user){
			  
			  console.log("Email already in use");
			  res.statusCode = "401";
			  res.value = "Email already in use";
			  callback(null, res);
		  }
		  		else
				  {
				
				  var newuser = new User();
				         
				  newuser.email = msg.email;
				  newuser.password = newuser.encryptPassword(msg.password);
				  newuser.firstname = msg.firstname;
				  newuser.lastname = msg.lastname;
				  newuser.userid = "";
				  newuser.contact = "";
				  newuser.birthdate = "";
				  newuser.location = "";
				  newuser.lastlogin = "";
				  
				  
			      
				  console.log("User:" +newuser);
				  
				  newuser.save(function(err){
			
			  		console.log("Saving New User");
			
			  		if(err)
			  		{
			  			console.log("cannot register");
			  			throw err;
			  			
			  		}
			  		else
			  		{
			  			    res.statusCode = "200";
							res.value = "New User Registered";
							console.log("New User Registered");
							callback(null, res);
							
			  		}
			
							
					
			  });
			
				  } 
	  	
	    
		
  
  
   });
    
   
}

exports.handle_request = handle_request;