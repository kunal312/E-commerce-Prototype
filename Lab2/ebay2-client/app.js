var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cron = require('node-cron');
var winston = require('winston');
var passport = require('passport');
require('./routes/passport')(passport);

//URL for the sessions collections in mongoDB
var mongoSessionConnectURL = "mongodb://localhost:27017/ebaynew2";
var expressSession = require("express-session");
var mongoStore = require("connect-mongo")(expressSession);
var mongo = require("./routes/mongo");


var mongo = require("./routes/mongo");
var routes = require('./routes/index');
var users = require('./routes/users');
var afterSignIn=require('./routes/afterSignIn');
var afterRegister=require('./routes/afterRegister');
var successLogin = require('./routes/successLogin');
var updateProfile = require('./routes/updateProfile');
var profilechanges = require('./routes/updateProfile');
var showItems = require('./routes/showItems');
var sellItems = require('./routes/sellItems');
var bidItems = require('./routes/bidItems');
var showbidItems = require('./routes/showbidItems');
var addtoCart = require('./routes/addtoCart');
var viewCart = require('./routes/viewCart');
var removefromCart = require('./routes/removefromCart');
var paymentValidate = require('./routes/paymentValidate');
var checkout = require('./routes/checkout');
var fetchOrders = require('./routes/fetchOrders');
var sellinghistory = require('./routes/sellinghistory');
var bidupdate = require('./routes/bidupdate');
var logout = require('./routes/logout');


var app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));





// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));





//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(expressSession({
	secret: 'cmpe273_ebaykunal',
	resave: false,  //don't save session if unmodified
	saveUninitialized: false,	// don't create session until something stored
	duration: 30 * 60 * 1000,    
	activeDuration: 5 * 60 * 1000,
	store: new mongoStore({
		url: mongoSessionConnectURL
	})
}));

app.use(passport.initialize());

app.use(express.static(path.join(__dirname, 'public')));




app.use('/', routes);
app.use('/users', users);
//app.post('/afterSignIn', afterSignIn);
app.post('/afterRegister', afterRegister);
app.post('/successLogin' ,successLogin);
app.post('/showItems' ,showItems);
app.post('/updateProfile',updateProfile);
app.post('/profilechanges',updateProfile);
app.post('/sellItems',sellItems);
app.post('/bidItems',bidItems);
app.post('/showbidItems',showbidItems);
app.post('/addtoCart',addtoCart);
app.post('/viewCart',viewCart);
app.post('/removefromCart',removefromCart);
app.post('/paymentValidate',paymentValidate);
app.post('/checkout',checkout);
app.post('/fetchOrders',fetchOrders);
app.post('/sellinghistory',sellinghistory);
app.post('/bidupdate',bidupdate);
app.post('/logout' ,logout);


app.post('/afterSignIn', function(req, res, next) {
	  passport.authenticate('login', function(err, user, info) {
		 console.log("********app.js************");
	    if(err) 
	    
	    {
	      return next(err);
	    } 
	   
	    if(!user && !info) {
	    	console.log(user);
	    	console.log("Invalid Login");
			var json_responses = {"statusCode" : 401 };
			console.log(json_responses);
			res.send(json_responses);
	    	} 
	    else if(!user && info) {
	    	console.log(info.message);
			var json_responses = {"statusCode" : 402 };
			console.log(json_responses);
			res.send(json_responses);
	    	}
	    
	    
	    	if(user){
	    		 req.logIn(user, {session:false}, function(err) {
					 if(err) {
				   	        return next(err);
				   	      }
				   	      
				   	      req.session.username = user;
				   	      console.log("User:" +req.session.username );
				   	      console.log("session initilized");
				   			var json_responses = {"statusCode" : 200,"useremail":req.session.username } ;
				   			res.send(json_responses);
			
				   	      
				   	      
				   });
	    	}    

	   
	  })(req, res, next);
	});





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
