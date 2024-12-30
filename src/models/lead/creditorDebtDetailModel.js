const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create the schema for Creditor
const CreditorSchema = new Schema({
  creditorsName: { type: String, required: true },
  bankType: { type: String, required: true },
  typeOfCredit: { type: String, required: true },
  accountNumber: { type: String, required: true, unique: true },
  balanceOOS: { type: Number, required: true }, // Outstanding Balance
  currentMonthlyEMI: { type: Number, required: true },
  numberOfMissedEMI: { type: Number, default: 0 },
  sanctionedAmount: { type: Number, required: true },
  loanStartDate: { type: Date, required: true },
  loanAgreementCopy: { type: String, required: true }, // URL or path to the loan agreement copy
});

// Create the Creditor model
const Creditor = mongoose.model('Creditor', CreditorSchema);

module.exports = Creditor;
