var express = require('express');
var router = express.Router();

/* GET Sign In page. */
router.get('/', function(req, res, next) {
	console.log("reached to routes sign in");

  res.render('sign');
});

module.exports = router;
