var router = require('express').Router();
var booking = require('../models/booking');
var restaurant = require('../models/restaurant');
var customer = require('../models/customer');
router.get('/', function(req, res){
	//render a page
	res.send('use post method please!');
});
function rollBack(var doc, var collection){
	collection.remove({_id: doc._id}, function(err){
		if(err){
			console.log('there was an error in rollback, couldn\'t remove doc');
			console.log('sadly, I dont have a solution to this');
		}
	});
}
router.post('/', function(req, res){
	var customerId = req.body.customerId;
	var numberOfSeats = req.body.numberOfSeats;
	var startTime = req.body.startTime;
	var newBooking =  new booking({
		customerId: customerId,
		numberOfSeats: numberOfSeats,
		startTime: startTime
	});
	var restaurantId = req.body.restaurantId;
	var seatsLeft = restaurant.findOne({_id: restaurantId}).select('seatsLeft');
	if(seatsLeft >= numberOfSeats){
		newBooking.save().then((bookingDoc) => {
			console.log('added new booking', bookingDoc);
			restaurant.update({_id: restaurantId},{
				$set: {seatsLeft: seatsLeft-numberOfSeats},
				$push: {bookings: bookingDoc._id}
			}, function(err, restaurantDoc){
				if(err){
					rollBack(bookingDoc, booking);
					return console.log('error in updating restaurant database');
				}
				console.log('successfully added :', restaurantDoc);
				customer.update({_id: customerId},{$push: {bookings: bookingDoc._id}}, function(err, customerDoc){
					if(err){
						rollBack(bookingDoc, booking);
						rollback(restaurantDoc, restaurant);
						return console.log('error in customer update');
					}
					console.log('updated customer', customerDoc)
				});
			});
		}, (err) => {
			console.log('couldn\'t add booking');
		});
		response.send({
			status: 'Booking Done'
		});
	}
	else{
		res.send({
			status: 'Sorry, tables not available!'
		});
	}
});
module.exports = router;