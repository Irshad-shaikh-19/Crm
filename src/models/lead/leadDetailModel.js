const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for LeadDetails
const LeadDetailsSchema = new Schema({
  prefix: { type: String, enum: ["Mr.", "Ms.", "Mrs."], required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  emailId: { type: String, required: true },
  secondaryEmail: { type: String },
  phoneNumber: { type: String, required: true },
  alternatePhoneNumber: { type: String },
  whatsappNumber: { type: String },
  accountManager: { type: String, ref: "User" },
  legalManager: { type: String, ref: "User" },
  leadOwner: { type: String, ref: "User" },
  paraLegalManager: { type: String, ref: "User" },
  customerType: { type: String, enum: ["New", "Old"], required: true },
  accountStatus: { type: String, enum: ["Active", "Inactive"], required: true },
});

// Create the model from the schema
const LeadDetails = mongoose.model("LeadDetails", LeadDetailsSchema);

module.exports = LeadDetails;
