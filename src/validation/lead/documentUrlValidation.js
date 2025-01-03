const Joi = require('joi');

// Validation schema for creating a DocumentUrl
const createDocumentUrlSchema = Joi.object({
  singleDebtUspLink: Joi.string().uri().required(),
  loeLink: Joi.string().uri().required(),
  referrerLink: Joi.string().uri().required(),
  leadActivityDetails: Joi.string().required(),
});

// Validation schema for updating a DocumentUrl
const updateDocumentUrlSchema = Joi.object({
  singleDebtUspLink: Joi.string().uri(),
  loeLink: Joi.string().uri(),
  referrerLink: Joi.string().uri(),
  leadActivityDetails: Joi.string(),
}).min(1); // Requires at least one field for an update

module.exports = {
  createDocumentUrlSchema,
  updateDocumentUrlSchema,
};
