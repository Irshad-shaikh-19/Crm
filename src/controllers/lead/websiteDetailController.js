const WebsiteDetails = require("../../models/websiteDetailModel");
const { createWebsiteDetailsSchema, updateWebsiteDetailsSchema } = require("../../validation/lead/websiteDetailValidation");

const create = async (req, res) => {
  try {
    const { error, value } = createWebsiteDetailsSchema.validate(req.body);
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
    const websiteDetail = await WebsiteDetails.create(value);

    res.status(201).json({ message: "websiteDetail created successfully", data: websiteDetail });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

// Update MainDetails
const update = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate request body
    const { error, value } = updateWebsiteDetailsSchema.validate(req.body);
    if (error) {
      res.status(400).json({ message: error.details[0].message });
      return;
    }

    // Find and update the MainDetails document
    const websiteDetail = await WebsiteDetails.findByIdAndUpdate(id, value, {
      new: true, // Return the updated document
    });

    if (!websiteDetail) {
      res.status(404).json({ message: "websiteDetail not found" });
      return;
    }

    res.status(200).json({ message: "websiteDetail updated successfully", data: websiteDetail });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

module.exports = { create, update };
