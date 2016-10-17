var ejs= require('ejs');
var mysql = require('mysql');

//Declaring the array which will hold all the available connections
var connectionpool =[];

//Initally create 100 connections and push it in array
for (var i = 0; i<100;i++)
{
		var connection = mysql.createConnection({
	    host     : 'localhost',
	    user     : 'root',
	    password : 'q1d3m0',
	    database : 'ebay_database',
	    port	 : 3306
	});
	
	//Pushing each connection to array
	connectionpool.push(connection);

}

function getConnection()
{
	var poollength = connectionpool.length;
	if(poollength>0)
	{
			var availableConnection = connectionpool.pop();
			return(availableConnection);


	}

	else
	{
		setInterval(function()
		{

		getConnection();


		},1);


	}

}

function pushConnection(connection)
{
	//Return Connection to Pool after use
	connectionpool.push(connection);
}



function fetchData(callback,sqlQuery){
	
	console.log("\nSQL Query::"+sqlQuery);
	
	var connection=getConnection();
	
	connection.query(sqlQuery, function(err, rows, fields) {
		pushConnection(connection);
		
		if(err){
			console.log("ERROR: " + err.message);
		}
		else 
		{	// return err or result
			console.log("DB Results:"+rows);
			callback(err, rows);
		}
	});
	
	
}

function putData(callback,sqlQuery1){
	
	console.log("\nSQL Query::"+sqlQuery1);
	
	var connection=getConnection();
	
	connection.query(sqlQuery1, function(err, rows, fields) {
		if(err){
			console.log("ERROR: " + err.message);
			
		}
		else{
			console.log("Qty: " + rows);
		    callback(err,rows);
			}	
	});
	console.log("\nConnection closed..");
	connection.end();
}	

function getItems(callback,sqlQuery2)
{

	console.log("\nSQL Query::"+sqlQuery2);
	var connection=getConnection();

	connection.query(sqlQuery2, function(err, rows, fields) {
		if(err){
			console.log("ERROR: " + err.message);
		}
		else 
		{	// return err or result
			console.log("DB Results:"+rows);
			callback(err, rows);
		}
		
	});
	console.log("\nConnection closed..");
	connection.end();

}

function putItems(callback,sqlQuery3)
{

	console.log("\nSQL Query::"+sqlQuery3);
	var connection=getConnection();

	connection.query(sqlQuery3, function(err, rows, fields) {
		if(err){
			console.log("ERROR: " + err.message);
		}
		else 
		{	// return err or result
			console.log("DB Results:"+rows);
			callback(err, rows);
		}
		
	});
	console.log("\nConnection closed..");
	connection.end();

}








exports.fetchData=fetchData;
exports.putData=putData;
exports.getItems=getItems;
exports.putItems=putItems;