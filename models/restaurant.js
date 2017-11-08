var mongoose = require('mongoose');
var schema = mongoose.Schema;
var mongooseId = schema.Types.ObjectId;
var restaurantSchema = new schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
	address: {
		type: String,
		required: true
	},
	pic: {
		type: String,
		required: true
	},
	numberOfTables: {
		type: Number,
		required: true
	},
	seatsPerTable: {
		type: Number,
		required: true
	},
	bookings: [{
		type: mongooseId,
		required: true,
		ref: 'booking'
	}],
	tablesLeft: {
		type: Number
	}
});
module.exports = mongoose.model('restaurant', restaurantSchema);