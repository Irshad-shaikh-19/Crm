const mongoose = require('mongoose');
const { Schema } = mongoose;

const CreditorSchema = new Schema({
    tenantId: { type: String, required: true }, // Multi-tenant support
    creditorsName: { type: String, required: true },
    bankType: { type: String, required: true },
    typeOfCredit: { type: String, required: true },
    accountNumber: { type: String, required: true, unique: true },
    balanceOOS: { type: Number, required: true },
    currentMonthlyEMI: { type: Number, required: true },
    numberOfMissedEMI: { type: Number, default: 0 },
    sanctionedAmount: { type: Number, required: true },
    loanStartDate: { type: Date, required: true },
    loanAgreementCopy: { type: String, required: true }
});

const CreditorDebt = mongoose.model('CreditorDebt', CreditorSchema);
module.exports = CreditorDebt;
