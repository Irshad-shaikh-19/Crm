const Joi = require('joi');


// Validation schema for creating EnachDetail
const createEnachDetailSchema = Joi.object({
  deductAmount: Joi.number().min(0).required(),
  transactionId: Joi.string().required(),
  instructionId: Joi.string().required(),
  transactionStatus: Joi.string()
    .valid('Pending', 'Success', 'Failed')
    .default('Pending'),
  deductionDate: Joi.date().required(),
  enachCreatedOn: Joi.date().required(),
  enachCustomer: Joi.string().required(),
  errorStatus: Joi.string().optional(),
  umrnNo: Joi.string().required(),
  enachFailureReason: Joi.string().optional(),
  originalDeductionDate: Joi.date().optional(),
});



// Validation schema for updating EnachDetail
const updateEnachDetailSchema = Joi.object({
  deductAmount: Joi.number().min(0),
  transactionId: Joi.string(),
  instructionId: Joi.string(),
  transactionStatus: Joi.string().valid('Pending', 'Success', 'Failed'),
  deductionDate: Joi.date(),
  enachCreatedOn: Joi.date(),
  enachCustomer: Joi.string(),
  errorStatus: Joi.string(),
  umrnNo: Joi.string(),
  enachFailureReason: Joi.string(),
  originalDeductionDate: Joi.date(),
}).min(1); 

module.exports = {
  createEnachDetailSchema,
  updateEnachDetailSchema,
};
