const leadDetailModel = require("../../models/lead/leadDetailModel");
const { createLeadDetailsSchema, updateLeadDetailsSchema } = require("../../validation/lead/leadDetailValidation");

const create = async (req, res) => {
  try {
    const { error, value } = createLeadDetailsSchema.validate(req.body);
    if (error) {
      const cleanMessage = error.details[0].message
        .replace(/[^a-zA-Z0-9 ]/g, '')
        .trim();
      res.status(400).json({
        status: 400,
        message: cleanMessage,
      });
      return;
    }

    const leadDetail = await leadDetailModel.create(value);

    res.status(201).json({ message: "leadDetail created successfully", data: leadDetail });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

// Update MainDetails
const update = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate request body
    const { error, value } = updateLeadDetailsSchema.validate(req.body);
    if (error) {
      res.status(400).json({ message: error.details[0].message });
      return;
    }

    // Find and update the MainDetails document
    const leadDetail = await leadDetailModel.findByIdAndUpdate(id, value, {
      new: true, // Return the updated document
    });

    if (!leadDetail) {
      res.status(404).json({ message: "LeadDetail not found" });
      return;
    }

    res.status(200).json({ message: "LeadDetail updated successfully", data: leadDetail });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

module.exports = { create, update };
