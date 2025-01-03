const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Income and Expenditure Schema
const IncomeExpenditureSchema = new Schema(
  {
    wagePerMonth: {
      type: Number,
      required: true,
    },
    otherIncome: {
      type: Number,
      default: 0,
    },
    pensionPerMonth: {
      type: Number,
      default: 0,
    },
    totalIncome: {
      type: Number,
      required: true,
    },
    incomeAsPerProof: {
      type: Number,
      required: true,
    },
    incomeRatioPercentage: {
      type: Number,
      required: true,
    },
    nextSalaryPaymentDate: {
      type: Date,
      required: true,
    },
    salaryAccount: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, 
  }
);

const IncomeExpenditure = mongoose.model("IncomeExpenditure", IncomeExpenditureSchema);

module.exports = IncomeExpenditure;
