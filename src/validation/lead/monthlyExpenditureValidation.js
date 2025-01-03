const Joi = require("joi");

// Validation schema for creating Monthly Expenditure
const createMonthlyExpenditureSchema = Joi.object({
  utilities: Joi.number().min(0).required(),
  medicalFees: Joi.number().min(0).required(),
  homeLoan: Joi.number().min(0).required(),
  rent: Joi.number().min(0).required(),
  educationFees: Joi.number().min(0).required(),
  otherLifeMedicalPolicies: Joi.number().min(0).required(),
  pension: Joi.number().min(0).required(),
  commuteToWorkCost: Joi.number().min(0).required(),
  emi: Joi.number().min(0).required(),
  telephone: Joi.number().min(0).required(),
  mobileInternet: Joi.number().min(0).required(),
  totalRepairMaintenance: Joi.number().min(0).required(),
  housekeepingFoodMaid: Joi.number().min(0).required(),
  totalCostForRunningCarBike: Joi.number().min(0).required(),
  otherSecureLoan: Joi.number().min(0).required(),
  others: Joi.number().min(0).required(),
  totalExpenditure: Joi.number().min(0).required(),
});

// Validation schema for updating Monthly Expenditure
const updateMonthlyExpenditureSchema = Joi.object({
  utilities: Joi.number().min(0),
  medicalFees: Joi.number().min(0),
  homeLoan: Joi.number().min(0),
  rent: Joi.number().min(0),
  educationFees: Joi.number().min(0),
  otherLifeMedicalPolicies: Joi.number().min(0),
  pension: Joi.number().min(0),
  commuteToWorkCost: Joi.number().min(0),
  emi: Joi.number().min(0),
  telephone: Joi.number().min(0),
  mobileInternet: Joi.number().min(0),
  totalRepairMaintenance: Joi.number().min(0),
  housekeepingFoodMaid: Joi.number().min(0),
  totalCostForRunningCarBike: Joi.number().min(0),
  otherSecureLoan: Joi.number().min(0),
  others: Joi.number().min(0),
  totalExpenditure: Joi.number().min(0),
});

module.exports = { createMonthlyExpenditureSchema, updateMonthlyExpenditureSchema };
