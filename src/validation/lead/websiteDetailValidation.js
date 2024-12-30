const Joi = require('joi');

const createWebsiteDetailsSchema = Joi.object({
  outstandingAmount: Joi.number().min(0).required(),
  numberOfLoans: Joi.number().integer().min(0).required(),
  missedPayments: Joi.number().integer().min(0).required(),
  source: Joi.string().required(),
  experiencingHarassment: Joi.boolean().optional(), // Defaults to false
});

const updateWebsiteDetailsSchema = Joi.object({
  outstandingAmount: Joi.number().min(0),
  numberOfLoans: Joi.number().integer().min(0),
  missedPayments: Joi.number().integer().min(0),
  source: Joi.string(),
  experiencingHarassment: Joi.boolean(),
}).min(1); // Requires at least one field for an update

module.exports = {
  createWebsiteDetailsSchema,
  updateWebsiteDetailsSchema
};
