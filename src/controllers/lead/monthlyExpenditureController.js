const MonthlyExpenditure = require("../../models/lead/monthlyExpenditureModel");
const {
  createMonthlyExpenditureSchema,
  updateMonthlyExpenditureSchema,
} = require("../../validation/lead/monthlyExpenditureValidation");

// Create Monthly Expenditure
const create = async (req, res) => {
  try {
    const { error } = createMonthlyExpenditureSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ status: 400, message: error.details[0].message });
    }

    const newExpenditure = await MonthlyExpenditure.create(req.body);
    res.status(201).json({
      message: "Monthly expenditure created successfully",
      data: newExpenditure,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

// Update Monthly Expenditure
const update = async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = updateMonthlyExpenditureSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ status: 400, message: error.details[0].message });
    }

    const updatedExpenditure = await MonthlyExpenditure.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedExpenditure) {
      return res.status(404).json({ message: "Monthly expenditure not found" });
    }

    res.status(200).json({
      message: "Monthly expenditure updated successfully",
      data: updatedExpenditure,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

module.exports = { create, update };
