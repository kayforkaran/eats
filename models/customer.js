var mongoose = require('mongoose');
var schema = mongoose.Schema;
var mongooseId = schema.Types.ObjectId;
var customerSchema = new schema({
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
	},
	bookings: [{
		type: mongooseId,
		required: true
	}]
});
module.exports = mongoose.model('customer', customerSchema);