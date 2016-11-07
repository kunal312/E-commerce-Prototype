var mongoose = require('mongoose');

var connectionpool =[];

function getConnection()
{
	
var newConnection = mongoose.createConnection("mongodb://localhost:27017/ebaynew2");
newConnection.on('error',function(err)
		{
		if(err)
			{
			throw err;
			}
	
		

		});

newConnection.once('open',function callback () {
	//console.info("Connection Succesfull");
	
	
});
return newConnection;
}

for(var i=0;i<10;i++)
	{
	
		var getconn = getConnection();
		connectionpool.push(getconn);
	}

function exportConnection()
{
	if(connectionpool.length!=0)
		{
			var sendConn = connectionpool.pop();
			return sendConn;
		}
	else{
		
		setInterval(function(){
			exportConnection();
		},1);
		
	}
}

function sendBackConnection(newConnection){
	connectionpool.push(newConnection);

}

exports.exportConnection = exportConnection;
exports.sendBackConnection=sendBackConnection;
