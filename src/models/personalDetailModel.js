const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for Lead
const leadSchema = new Schema({
  lead_id: { type: String, required: true },
  pancard: { type: String, required: true },
  aadharCard: { type: String, required: true },
  dateOfBirth: { type: Date, default: null },
  ageOfClient: { type: Number, required: true },
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  wifeName: { type: String, required: true },
  reasonForFinancialDifficulty: { type: String, required: true },
  numberOfChildren: { type: Number, required: true },
});

// Create the model from the schema
const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;
