var newuserSchema = require('./model/newuserSchema');
var User = newuserSchema.User;  //Instance for MongoDB

//Function for fetching profile details

function fetchprofile_request(msg, callback){
	
	var res = {};
	
	
	console.log("Email in Handle Req:" + msg.email);
	var email = msg.email;
   
   
    User.findOne({"email": msg.email},function(err,user) {
	  
	  if(err)
		  {
		  throw err;
		  } 
		  else if(user){
			  console.log(user);
			  console.log("Fetched Profile Information");
			  var userdetails = {"email":user.email,
					  			"firstname":user.firstname,
					  			"lastname":user.lastname,
					  			"userid":  user.userid,
					  			"contact": user.contact,
					  			"birthdate": user.birthdate,
					  			"location":user.location};
			  
			  
			  
			  
			  
			  res.user = userdetails;
			  res.statusCode = "200";
			  res.value = "Profile Information Fetched";
			  callback(null, res);
		  }
		  		else
				  {
		  			
		  				console.log("Profile information cannot be fetched");
		  			  res.statusCode = "401";
					  res.value = "Profile cannot be fetched";
					  callback(null, res);
		  			
				  } 
	  	
	    
		
  
  
   });
    
}
    //Function for Update Profile
   
   function upateprofile_request(msg, callback){
    	
    	var res = {};
    	
    	console.log("Email in Handle Req:" + msg.email);

    	
    		
    	 var query = { email: msg.email };
    	// var options = { multi: true };
    	 
    	 var update = {firstname:msg.firstname,
    			 		lastname:msg.lastname,
    			 		userid:msg.userid,
    			 		contact:msg.contact,
    			 		birthdate:msg.birthdate,
    			 		location:msg.location};
    	 
    	
    	 
    	
       
        User.update(query, { $set: update},function(err,WriteResult) {
    	  
        console.log("Number of Documents Updated " + WriteResult);
    	
        if(err)
    		  {
    		  throw err;
    		  } 
    		  
    	  	else if(WriteResult.nModified>0){
    			
    			  console.log("Updated Profile Information");
    			  res.statusCode = "200";
    			  res.value = "Profile Information Updated";
    			  callback(null, res);
    		  }
    		  		
    	  		else if(WriteResult.nModified==0)
    				  {
    	  				
    		  			 console.log("No Changes Made to Profile");
    		  			  res.statusCode = "401";
    					  res.value = "Profile same";
    					  callback(null, res);
    		  			
    				  } 
    	  	
    	    
    		
      
      
       });
    
    
    
}

exports.fetchprofile_request = fetchprofile_request;
exports.upateprofile_request = upateprofile_request;