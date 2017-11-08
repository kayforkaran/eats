var router = require('express').Router();
var booking = require('../models/booking');
var customer = require('../models/customer');
var restaurant = require('../models/restaurant')
router.get('/', function(req, res){
	res.send('please use post method');
});
router.post('/' function(req, res){
	var bookingId = req.body.bookingId;
	var myBooking = booking.findOne({_id: bookingId});
	var customerId = myBooking.customerId;
	var restaurantId = myBooking.restaurantId;
	customer.update({_id: customerId}, {$set: {bookings: bookingId}}, function(err, customerDoc){
		if(err){
			console.log('error in updating customer document');
		}
		restaurant.update({_id: restaurantId}, )
	});
});
module.exports = router;