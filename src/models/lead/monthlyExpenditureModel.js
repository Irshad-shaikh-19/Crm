const mongoose = require("mongoose");
const { Schema } = mongoose;


const MonthlyExpenditureSchema = new Schema(
  {
    utilities: {
      type: Number,
      required: true,
      default: 0,
    },
    medicalFees: {
      type: Number,
      required: true,
      default: 0,
    },
    homeLoan: {
      type: Number,
      required: true,
      default: 0,
    },
    rent: {
      type: Number,
      required: true,
      default: 0,
    },
    educationFees: {
      type: Number,
      required: true,
      default: 0,
    },
    otherLifeMedicalPolicies: {
      type: Number,
      required: true,
      default: 0,
    },
    pension: {
      type: Number,
      required: true,
      default: 0,
    },
    commuteToWorkCost: {
      type: Number,
      required: true,
      default: 0,
    },
    emi: {
      type: Number,
      required: true,
      default: 0,
    },
    telephone: {
      type: Number,
      required: true,
      default: 0,
    },
    mobileInternet: {
      type: Number,
      required: true,
      default: 0,
    },
    totalRepairMaintenance: {
      type: Number,
      required: true,
      default: 0,
    },
    housekeepingFoodMaid: {
      type: Number,
      required: true,
      default: 0,
    },
    totalCostForRunningCarBike: {
      type: Number,
      required: true,
      default: 0,
    },
    otherSecureLoan: {
      type: Number,
      required: true,
      default: 0,
    },
    others: {
      type: Number,
      required: true,
      default: 0,
    },
    totalExpenditure: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true, 
  }
);

// Pre-save hook to calculate total expenditure
MonthlyExpenditureSchema.pre("save", function (next) {
  this.totalExpenditure =
    this.utilities +
    this.medicalFees +
    this.homeLoan +
    this.rent +
    this.educationFees +
    this.otherLifeMedicalPolicies +
    this.pension +
    this.commuteToWorkCost +
    this.emi +
    this.telephone +
    this.mobileInternet +
    this.totalRepairMaintenance +
    this.housekeepingFoodMaid +
    this.totalCostForRunningCarBike +
    this.otherSecureLoan +
    this.others;
  next();
});


const MonthlyExpenditure = mongoose.model("MonthlyExpenditure", MonthlyExpenditureSchema);

module.exports = MonthlyExpenditure;
