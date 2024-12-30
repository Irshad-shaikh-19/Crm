const MainDetails = require("../../models/lead/mainDetailModel");
const { createMainDetailsSchema, updateMainDetailsSchema } = require("../../validation/lead/mainDetailValidation");
const { v4: uuidv4 } = require("uuid");

// Create MainDetails
const create = async (req, res) => {
  try {
    // Validate request body
    const { error, value } = createMainDetailsSchema.validate(req.body);
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

    if (!value.leadUniqueId || value.leadUniqueId.trim() === "") {
      value.leadUniqueId = uuidv4(); // Generate a random UUID
    }
    const mainDetails = await MainDetails.create(value);

    res.status(201).json({ message: "MainDetails created successfully", data: mainDetails });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

// Update MainDetails
const update = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate request body
    const { error, value } = updateMainDetailsSchema.validate(req.body);
    if (error) {
      res.status(400).json({ message: error.details[0].message });
      return;
    }

    // Find and update the MainDetails document
    const updatedMainDetails = await MainDetails.findByIdAndUpdate(id, value, {
      new: true, // Return the updated document
    });

    if (!updatedMainDetails) {
      res.status(404).json({ message: "MainDetails not found" });
      return;
    }

    res.status(200).json({ message: "MainDetails updated successfully", data: updatedMainDetails });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

module.exports = { create, update };
