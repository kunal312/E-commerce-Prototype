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

exports.validatePayment_request = validatePayment_request;