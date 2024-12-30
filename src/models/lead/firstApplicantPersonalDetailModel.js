const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for ApplicantPersonalDetails
const ApplicantPersonalDetailsSchema = new Schema({
  pancard: { type: String },
  aadharCard: { type: String },
  dateOfBirth: { type: Date },
  age: { type: Number },
  fatherName: { type: String },
  motherName: { type: String },
  spouseName: { type: String },
  financialDifficultyReason: { type: String },
  numberOfChildren: { type: Number },
});

// Create the model from the schema
const ApplicantPersonalDetails = mongoose.model(
  'ApplicantPersonalDetails',
  ApplicantPersonalDetailsSchema
);

module.exports = ApplicantPersonalDetails;
