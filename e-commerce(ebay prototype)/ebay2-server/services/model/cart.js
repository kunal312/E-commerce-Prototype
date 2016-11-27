var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connection = require('../connectmongoose');


var tempConn = connection.exportConnection();
connection.sendBackConnection(tempConn);



var cartSchema = new Schema({
	email: {type: String},
	cartitems : { type: Schema.ObjectId, ref: 'Item' },

	
	
});


var Cart = tempConn.model('Cart', cartSchema);

exports.Cart = Cart;