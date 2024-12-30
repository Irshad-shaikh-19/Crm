const Joi = require('joi');

// LeadDetails validation schema
const createLeadDetailsSchema = Joi.object({
  prefix: Joi.string()
    .valid("Mr.", "Ms.", "Mrs.")
    .required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  emailId: Joi.string().email().required(),
  secondaryEmail: Joi.string().email().optional(),
  phoneNumber: Joi.string()
    .pattern(/^[0-9]{10}$/) // Assuming phone numbers have 10 digits
    .required(),
  alternatePhoneNumber: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .optional(),
  whatsappNumber: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .optional(),
  accountManager: Joi.string().optional(), // Reference to "User" but stored as string
  legalManager: Joi.string().optional(),   // Reference to "User"
  leadOwner: Joi.string().optional(),      // Reference to "User"
  paraLegalManager: Joi.string().optional(), // Reference to "User"
  customerType: Joi.string()
    .valid("New", "Old")
    .required(),
  accountStatus: Joi.string()
    .valid("Active", "Inactive")
    .required(),
});

// Schema for updating LeadDetails
const updateLeadDetailsSchema = Joi.object({
  prefix: Joi.string().valid("Mr.", "Ms.", "Mrs."),
  firstName: Joi.string(),
  lastName: Joi.string(),
  emailId: Joi.string().email(),
  secondaryEmail: Joi.string().email(),
  phoneNumber: Joi.string().pattern(/^[0-9]{10}$/),
  alternatePhoneNumber: Joi.string().pattern(/^[0-9]{10}$/),
  whatsappNumber: Joi.string().pattern(/^[0-9]{10}$/),
  accountManager: Joi.string(),
  legalManager: Joi.string(),
  leadOwner: Joi.string(),
  paraLegalManager: Joi.string(),
  customerType: Joi.string().valid("New", "Old"),
  accountStatus: Joi.string().valid("Active", "Inactive"),
}).min(1); // Requires at least one field to be updated

module.exports = {
  createLeadDetailsSchema,
  updateLeadDetailsSchema
};
