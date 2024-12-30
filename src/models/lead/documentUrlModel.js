const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Schema
const DocumentUrlSchema = new Schema(
  {
    singleDebtUspLink: {
      type: String,
      required: true
    },
    loeLink: {
      type: String,
      required: true
    },
    referrerLink: {
      type: String,
      required: true
    },
    leadActivityDetails: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true // Automatically adds createdAt and updatedAt fields
  }
);

// Create the model
const DocumentUrl = mongoose.model('DocumentUrl', DocumentUrlSchema);

module.exports = DocumentUrl;
