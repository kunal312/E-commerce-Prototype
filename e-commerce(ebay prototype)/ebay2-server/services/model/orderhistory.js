
var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var connection = require('../connectmongoose');


var tempConn = connection.exportConnection();
connection.sendBackConnection(tempConn);


var orderHistorySchema = new Schema({
	email: {type: String},
	itemname: {type: String},
	itemqty:{type:Number},
	purchasedate : { type: String },
	itemprice : {type:Number}
	
	
});


var OrderHistory = tempConn.model('OrderHistory', orderHistorySchema);

exports.OrderHistory = OrderHistory;