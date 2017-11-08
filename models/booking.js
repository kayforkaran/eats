var mongoose = require('mongoose');
var Time = require('node-datetime').;
var schema = mongoose.Schema;
var mongooseId = schema.Types.ObjectId;
var bookingSchema = new schema({
	customerId: {
		type: mongooseId,
		required: true,
		ref: 'customer'
	},
	numberOfSeats: {
		type: Number,
		required: true
	},
	startTime: {
		type: Date,
		required: true
	},
	isEnded: {
		type: Boolean
	},
	endTime: {
		type: Date,
		required: false
	}
});
module.exports = mongoose.model('booking', bookingSchema);