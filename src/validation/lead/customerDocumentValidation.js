const Joi = require("joi");

const createCustomDocumentSchema = Joi.object({
  loanAgreements: Joi.array().items(Joi.string()).required(),
  creditFiles: Joi.array().items(Joi.string()).required(),
  rentHousingLoans: Joi.array().items(Joi.string()).required(),
  wageSlips: Joi.array().items(Joi.string()).required(),
});


module.exports = { createCustomDocumentSchema };
