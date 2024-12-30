const Joi = require('joi');

const createPersonalDetailsSchema = Joi.object({
  pancard: Joi.string().optional(),
  aadharCard: Joi.string().optional(),
  dateOfBirth: Joi.date().optional(),
  age: Joi.number().min(0).optional(),
  fatherName: Joi.string().optional(),
  motherName: Joi.string().optional(),
  spouseName: Joi.string().optional(),
  financialDifficultyReason: Joi.string().optional(),
  numberOfChildren: Joi.number().integer().min(0).optional(),
});

const updatePersonalDetailsSchema = Joi.object({
  pancard: Joi.string(),
  aadharCard: Joi.string(),
  dateOfBirth: Joi.date(),
  age: Joi.number().min(0),
  fatherName: Joi.string(),
  motherName: Joi.string(),
  spouseName: Joi.string(),
  financialDifficultyReason: Joi.string(),
  numberOfChildren: Joi.number().integer().min(0),
}).min(1); // At least one field required for update

module.exports = {
  createPersonalDetailsSchema,
  updatePersonalDetailsSchema
};
