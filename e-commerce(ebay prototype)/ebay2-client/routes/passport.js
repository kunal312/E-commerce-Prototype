var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var mq_client = require('../rpc/client');
var logger = require('./winston');

module.exports = function(passport) {
       	
    	
    passport.use('login', new LocalStrategy({
			    usernameField: 'inputUsername',
			    passwordField: 'inputPassword',
			    session: false
			  },function (username, password, done) {
    	       
    		 
    		 
    		 process.nextTick(function () {
    	           
    			 console.log("Username" + username);
    	        	
    	        	logger.eventLogger.debug("Event:SignIn,User:"+ username);
    	      
    	        			var msg_payload = { 
    	        					"email" : username,
    	        					"password" : password,
    	        			};

    	           
    	        	mq_client.make_request('login_queue',msg_payload, function(err, results){
    	                
    	        		console.log(results);
    	        		
    	        		if(err)
    	        			{
    	        			console.log("Error in login:"+err);
    	        			done(err,null);
    	        			}
    	        			
    	        		else{
    	        			
    	        			if (results.statusCode == 401) 
        	        		{
        	        				console.log("Invalid Login in passport.js");
        	                         done(null, false);
        	        		}  	
        	        		
        	        		
        	        	else if(results.statusCode == 402){
        	        			
        	        			console.log("Invalid Username");
    	                         done(null, false, { message: 'Invalid username' } );
        	        		}
        	        		else if(results.statusCode == 200)
        	                
        	        		{
        	        		console.log("Login Successfull");
        	        		console.log(username);
    	                	console.log(results);
    	                    done(null, username);
        	        		}
    	        		}			
    	        		
    	        		
    	        		
    	                	
    	            });

    	        });
    	    }));
     	
    
};


