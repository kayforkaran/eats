var router = require('express').Router();
var restaurant = require('../models/restaurant')
router.get('/', function(req, res){
	//render a page
	res.send('use post method please!');
});
router.post('/', function(req, res){
	var name = req.body.name;
	var email = req.body.email;
	var password = req.body.password;
	var address = req.body.address;
	var pic = req.body.pic;
	var numberOfTables = req.body.numberOfTables;
	var seatsPerTable = req.body.seatsPerTable;
	var bookings = [];
	var newRestaurant =  new restaurant({
		name: name,
		email: email,
		password: password,
		address: address,
		pic: pic,
		numberOfTables: numberOfTables,
		seatsPerTable: seatsPerTable,
		bookings: []
		tablesLeft: numberOfTables,
	});
	newRestaurant.save().then((doc) => {
		console.log('saved new restaurant', doc);
	}, (err) => {
		console.log('couldn\'t save restaurant');
	});
});
module.exports = router;