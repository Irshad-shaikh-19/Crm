const Joi = require('joi');

const personalDetailsSchema = Joi.object({
  aadharNumber: Joi.number().required(),
  panCard: Joi.string().required(),
  dateOfBirth: Joi.date().required(),
  fatherName: Joi.string().required(),
  motherName: Joi.string().required(),
  wifeName: Joi.string().required(),
  reasonOfFinancialDifficulty: Joi.string().required(),
  numberOfChildren: Joi.number().required(),
});

// Define other schemas for sections like applicantAddress, mainDetails, etc.

module.exports = personalDetailsSchema;
