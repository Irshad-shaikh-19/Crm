const { Request, Response } = require("express");
const ApplicantPersonalDetails = require("../../models/lead/firstApplicantPersonalDetailModel");
const { createPersonalDetailsSchema, updatePersonalDetailsSchema } = require("../../validation/lead/applicantPersonalDetailValidation");

const create = async (req, res) => {
  try {
    const { error, value } = createPersonalDetailsSchema.validate(req.body);
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

    const applicantPersonalDetail = await ApplicantPersonalDetails.create(value);

    res.status(201).json({ message: "applicantPersonalDetail created successfully", data: applicantPersonalDetail });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

// Update MainDetails
const update = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate request body
    const { error, value } = updatePersonalDetailsSchema.validate(req.body);
    if (error) {
      res.status(400).json({ message: error.details[0].message });
      return;
    }

    // Find and update the MainDetails document
    const applicantPersonalDetail = await ApplicantPersonalDetails.findByIdAndUpdate(id, value, {
      new: true, // Return the updated document
    });

    if (!applicantPersonalDetail) {
      res.status(404).json({ message: "applicantPersonalDetail not found" });
      return;
    }

    res.status(200).json({ message: "applicantPersonalDetail updated successfully", data: applicantPersonalDetail });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

module.exports = { create, update };
