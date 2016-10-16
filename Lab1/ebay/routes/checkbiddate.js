var cron = require('node-cron');
 
cron.schedule('* * * * *', function(){
  console.log('running a task every minute');
});


/*
var CronJob = require('cron').CronJob;
var job=new CronJob('* * * * * *', function() {
  console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');

*/
var CronJob = require('cron').CronJob;
var job = new CronJob({
  cronTime: '* * * * * *',
  onTick: function() {
    console.log("Fired");
  },
  start: false,
  timeZone: 'America/Los_Angeles'
});
job.start();