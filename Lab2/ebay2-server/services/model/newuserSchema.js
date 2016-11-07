//creating New User Registration model
var bcrypt = require('bcrypt-nodejs');

var mongoose = require('mongoose');

//var connection = mongoose.createConnection("mongodb://localhost:27017/ebaynew2");
var Schema = mongoose.Schema;

var connection = require('../connectmongoose');


var tempConn = connection.exportConnection();
connection.sendBackConnection(tempConn);




//Schema for New User Registration

var newUserSchema = new Schema({
	email: {type: String},
	password: {type: String},
	firstname: {type: String},
	lastname: {type: String},
	userid:  {type: String},
	contact: {type: String},
	birthdate: {type: String},
	location:{type: String},
	lastlogin :{type: String},
	
});

//Methods for Encryption and Decryption
newUserSchema.methods.encryptPassword = function(password)
{
	return bcrypt.hashSync(password);
};

newUserSchema.methods.validatePassword = function(password)
{
	return bcrypt.compareSync(password,this.password);
};



var User = tempConn.model('User', newUserSchema);

exports.User = User;