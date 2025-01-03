const express = require("express");
const { create, update } = require("../../controllers/lead/monthlyExpenditureController");

const router = express.Router();

// Route for creating Monthly Expenditure
router.post("/monthly-expenditure", create);

// Route for updating Monthly Expenditure
router.put("/monthly-expenditure/:id", update);

module.exports = router;
