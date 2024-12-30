const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for MainDetails
const MainDetailsSchema = new Schema({
  leadUniqueId: { type: String, unique: true },
  email: { type: String, required: true },
  accountManager: { type: String, ref: "User" },
  accountStatus: { type: String, enum: ["Active", "Inactive"], required: true },
  customerType: { type: String, enum: ["New", "Old"], required: true },
  leadStatus: { type: String, required: true },
  disposableIncome: { type: Number, default: 0 },
});

// Create the model from the schema
const MainDetails = mongoose.model("MainDetails", MainDetailsSchema);

module.exports = MainDetails;
