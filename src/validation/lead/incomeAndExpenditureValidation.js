const Joi = require("joi");

const createIncomeExpenditureSchema = Joi.object({
  wagePerMonth: Joi.number().positive().required().messages({
    "number.base": "Wage per month must be a number.",
    "number.positive": "Wage per month must be a positive number.",
    "any.required": "Wage per month is required.",
  }),
  otherIncome: Joi.number().positive().allow(0).messages({
    "number.base": "Other income must be a number.",
    "number.positive": "Other income must be a positive number or zero.",
  }),
  pensionPerMonth: Joi.number().positive().allow(0).messages({
    "number.base": "Pension per month must be a number.",
    "number.positive": "Pension per month must be a positive number or zero.",
  }),
  totalIncome: Joi.number().positive().required().messages({
    "number.base": "Total income must be a number.",
    "number.positive": "Total income must be a positive number.",
    "any.required": "Total income is required.",
  }),
  incomeAsPerProof: Joi.number().positive().required().messages({
    "number.base": "Income as per proof must be a number.",
    "number.positive": "Income as per proof must be a positive number.",
    "any.required": "Income as per proof is required.",
  }),
  incomeRatioPercentage: Joi.number().positive().max(100).required().messages({
    "number.base": "Income ratio percentage must be a number.",
    "number.positive": "Income ratio percentage must be a positive number.",
    "number.max": "Income ratio percentage cannot exceed 100.",
    "any.required": "Income ratio percentage is required.",
  }),
  nextSalaryPaymentDate: Joi.date().iso().required().messages({
    "date.base": "Next salary payment date must be a valid date.",
    "any.required": "Next salary payment date is required.",
  }),
  salaryAccount: Joi.string().required().messages({
    "string.base": "Salary account must be a string.",
    "any.required": "Salary account is required.",
  }),
});

const updateIncomeExpenditureSchema = Joi.object({
  wagePerMonth: Joi.number().positive().messages({
    "number.base": "Wage per month must be a number.",
    "number.positive": "Wage per month must be a positive number.",
  }),
  otherIncome: Joi.number().positive().allow(0).messages({
    "number.base": "Other income must be a number.",
    "number.positive": "Other income must be a positive number or zero.",
  }),
  pensionPerMonth: Joi.number().positive().allow(0).messages({
    "number.base": "Pension per month must be a number.",
    "number.positive": "Pension per month must be a positive number or zero.",
  }),
  totalIncome: Joi.number().positive().messages({
    "number.base": "Total income must be a number.",
    "number.positive": "Total income must be a positive number.",
  }),
  incomeAsPerProof: Joi.number().positive().messages({
    "number.base": "Income as per proof must be a number.",
    "number.positive": "Income as per proof must be a positive number.",
  }),
  incomeRatioPercentage: Joi.number().positive().max(100).messages({
    "number.base": "Income ratio percentage must be a number.",
    "number.positive": "Income ratio percentage must be a positive number.",
    "number.max": "Income ratio percentage cannot exceed 100.",
  }),
  nextSalaryPaymentDate: Joi.date().iso().messages({
    "date.base": "Next salary payment date must be a valid date.",
  }),
  salaryAccount: Joi.string().messages({
    "string.base": "Salary account must be a string.",
  }),
});

module.exports = { createIncomeExpenditureSchema, updateIncomeExpenditureSchema };
