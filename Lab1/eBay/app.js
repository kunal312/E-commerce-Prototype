var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('client-sessions');

var routes = require('./routes/index');
var users = require('./routes/users');
var afterSignIn=require('./routes/afterSignIn');
var afterRegister=require('./routes/afterRegister');
var successLogin = require('./routes/successLogin');
var logout = require('./routes/logout');
var showItems = require('./routes/showItems');
var sellItems = require('./routes/sellItems');
var addtoCart = require('./routes/addtoCart');
var viewCart = require('./routes/viewCart');

var app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({   
    
	  cookieName: 'session',    
	  secret: 'cmpe273_test_string',    
	  duration: 30 * 60 * 1000,    //setting the time for active session
	  activeDuration: 1* 60 * 1000,  
	  			}));



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
app.use('/users', users);
app.post('/afterSignIn', afterSignIn);
app.post('/afterRegister', afterRegister);
app.post('/successLogin' ,successLogin);
app.post('/logout' ,logout);
app.post('/showItems' ,showItems);
app.post('/sellItems',sellItems);
app.post('/addtoCart',addtoCart);
app.post('/viewCart' ,viewCart);








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
