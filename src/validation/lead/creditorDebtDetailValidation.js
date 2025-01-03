const Joi = require('joi');

// Validation schema for creating a Creditor
const createCreditorSchema = Joi.object({
  creditorsName: Joi.string(),
  bankType: Joi.string().required(),
  typeOfCredit: Joi.string().required(),
  accountNumber: Joi.string().required(),
  balanceOOS: Joi.number().min(0).required(),
  currentMonthlyEMI: Joi.number().min(0).required(),
  numberOfMissedEMI: Joi.number().min(0).default(0),
  sanctionedAmount: Joi.number().min(0).required(),
  loanStartDate: Joi.date().required(),
  loanAgreementCopy: Joi.string().uri().required(),
});

// Validation schema for updating a Creditor
const updateCreditorSchema = Joi.object({
  creditorsName: Joi.string(),
  bankType: Joi.string(),
  typeOfCredit: Joi.string(),
  accountNumber: Joi.string(),
  balanceOOS: Joi.number().min(0),
  currentMonthlyEMI: Joi.number().min(0),
  numberOfMissedEMI: Joi.number().min(0),
  sanctionedAmount: Joi.number().min(0),
  loanStartDate: Joi.date(),
  loanAgreementCopy: Joi.string().uri(),
}).min(1); // Requires at least one field to be updated

module.exports = { createCreditorSchema, updateCreditorSchema };
