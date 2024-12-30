const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Schema
const CustomDocumentSchema = new Schema(
  {
    loanAgreements: {
      type: [String], // Array of strings for multiple attachments
      required: true
    },
    creditFiles: {
      type: [String],
      required: true
    },
    rentHousingLoans: {
      type: [String],
      required: true
    },
    wageSlips: {
      type: [String],
      required: true
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create the model
const CustomDocument = mongoose.model('CustomDocument', CustomDocumentSchema);

module.exports = CustomDocument;
