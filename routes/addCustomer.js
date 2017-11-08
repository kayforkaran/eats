var router = require('express').Router();
var customer = require('../models/customer')
router.get('/', function(req, res){
	//render a page
	res.send('use post method please!');
});
router.post('/', function(req, res){
	var name = req.body.name;
	var email = req.body.email;
	var password = req.body.password;
	var bookings = [];
	var newCustomer =  new customer({
		name: name,
		email: email,
		bookings: bookings
	});
	newCustomer.save().then((doc) => {
		console.log('saved new customer', doc);
	}, (err) => {
		console.log('couldn\'t save customer');
	});
});
module.exports = router;