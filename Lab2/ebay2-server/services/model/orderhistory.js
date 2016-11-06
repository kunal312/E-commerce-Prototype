
var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var orderHistorySchema = new Schema({
	email: {type: String},
	itemname: {type: String},
	itemqty:{type:Number},
	purchasedate : { type: String },
	itemprice : {type:Number}
	
	
});


var OrderHistory = mongoose.model('OrderHistory', orderHistorySchema);

exports.OrderHistory = OrderHistory;