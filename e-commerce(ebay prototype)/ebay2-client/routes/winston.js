
var winston = require('winston');


var eventLogger = new (winston.Logger)
( {
 transports: [
    new winston.transports.Console( {
     level: 'debug', 
     colorize: true
   } ),
  new winston.transports.File( {
     level: 'debug',
     timestamp : function(){ return Date()},    
     filename: './event.log',
    level: 'debug',
    json: true,
    eol: '\n'




  } )
    ] 
} );





var bidLogger = new (winston.Logger)
( {
 transports: [
    new winston.transports.Console( {
     level: 'debug', 
     colorize: true
   } ),
  new winston.transports.File( {
     level: 'debug',
     timestamp : function(){ return Date()},    
     filename: './bid.log',
    level: 'debug',
    json: true,
    eol: '\n'




  } )
    ] 
} );




module.exports.eventLogger=eventLogger;
module.exports.bidLogger=bidLogger;