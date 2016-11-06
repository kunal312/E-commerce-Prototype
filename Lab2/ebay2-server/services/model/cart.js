var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var cartSchema = new Schema({
	email: {type: String},
	cartitems : { type: Schema.ObjectId, ref: 'Item' },

	
	
});


var Cart = mongoose.model('Cart', cartSchema);

exports.Cart = Cart;