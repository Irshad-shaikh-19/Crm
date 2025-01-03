const IncomeExpenditure = require("../../models/lead/incomeAndExpenditureModel");
const {
  createIncomeExpenditureSchema,
  updateIncomeExpenditureSchema,
} = require("../../validation/lead/incomeAndExpenditureValidation");

const create = async (req, res) => {
  try {
    const { error } = createIncomeExpenditureSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ status: 400, message: error.details[0].message });
    }

    const incomeExpenditure = await IncomeExpenditure.create(req.body);

    res.status(201).json({
      status: 201,
      message: "IncomeExpenditure data created successfully",
      data: incomeExpenditure,
    });
  } catch (err) {
    res.status(500).json({ status: 500, message: "Internal Server Error", error: err.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = updateIncomeExpenditureSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ status: 400, message: error.details[0].message });
    }

    const incomeExpenditure = await IncomeExpenditure.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!incomeExpenditure) {
      return res.status(404).json({ status: 404, message: "IncomeExpenditure data not found" });
    }

    res.status(200).json({
      status: 200,
      message: "IncomeExpenditure data updated successfully",
      data: incomeExpenditure,
    });
  } catch (err) {
    res.status(500).json({ status: 500, message: "Internal Server Error", error: err.message });
  }
};

module.exports = { create, update };
