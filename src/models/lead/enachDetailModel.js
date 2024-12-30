const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for MongoDB
const EnachDetailSchema = new Schema({
  deductAmount: { type: Number, required: true },
  transactionId: { type: String, required: true },
  instructionId: { type: String, required: true },
  transactionStatus: {
    type: String,
    enum: ['Pending', 'Success', 'Failed'],
    default: 'Pending'
  },
  deductionDate: { type: Date, required: true },
  enachCreatedOn: { type: Date, required: true },
  enachCustomer: { type: String, required: true },
  errorStatus: { type: String },
  umrnNo: { type: String, required: true },
  enachFailureReason: { type: String },
  originalDeductionDate: { type: Date }
});

// Create the model from the schema
const EnachDetailModel = mongoose.model('EnachDetail', EnachDetailSchema);

module.exports = EnachDetailModel;
