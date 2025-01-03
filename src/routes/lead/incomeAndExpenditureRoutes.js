const express = require("express");
const { create, update } = require("../../controllers/lead/incomeAndExpenditureController");

const router = express.Router();

// Create IncomeExpenditure data
router.post("/income-expenditure", create);

// Update IncomeExpenditure data by ID
router.put("/income-expenditure/:id", update);

module.exports = router;
