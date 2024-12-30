const Joi = require('joi');

const createMainDetailsSchema = Joi.object({
  email: Joi.string().email().required(),
  accountManager: Joi.string().required(),
  accountStatus: Joi.string().valid("Active", "Inactive").required(),
  customerType: Joi.string().valid("New", "Old").required(),
  leadStatus: Joi.string().required(),
  disposableIncome: Joi.number().min(0).required(),
});

const updateMainDetailsSchema = Joi.object({
  leadUniqueId: Joi.string(),
  email: Joi.string().email(),
  accountManager: Joi.string(),
  accountStatus: Joi.string().valid("Active", "Inactive"),
  customerType: Joi.string().valid("New", "Old"),
  leadStatus: Joi.string(),
  disposableIncome: Joi.number().min(0),
}).min(1); // Ensure at least one field is being updated

module.exports = {
  createMainDetailsSchema,
  updateMainDetailsSchema
};
