const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for WebsiteDetails
const WebsiteDetailsSchema = new Schema({
  outstandingAmount: { type: Number, required: true },
  numberOfLoans: { type: Number, required: true },
  missedPayments: { type: Number, required: true },
  source: { type: String, required: true },
  experiencingHarassment: { type: Boolean, default: false },
});

// Create the model from the schema
const WebsiteDetails = mongoose.model('WebsiteDetails', WebsiteDetailsSchema);

module.exports = WebsiteDetails;
