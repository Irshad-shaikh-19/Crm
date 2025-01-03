const enachDetailModel = require("../../models/lead/enachDetailModel"); 
const {
  createEnachDetailSchema,
  updateEnachDetailSchema,
} = require("../../validation/lead/enachDetailValidation"); 


// Create a new EnachDetail
const create = async (req, res) => {
  try {
    const { error, value } = createEnachDetailSchema.validate(req.body);
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

    const enachDetail = await enachDetailModel.create(value);

    res.status(201).json({
      message: "EnachDetail created successfully",
      data: enachDetail,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

// Update an existing EnachDetail by ID
const update = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate request body
    const { error, value } = updateEnachDetailSchema.validate(req.body);
    if (error) {
      res.status(400).json({ message: error.details[0].message });
      return;
    }

    // Find and update the EnachDetail document
    const enachDetail = await enachDetailModel.findByIdAndUpdate(id, value, {
      new: true, // Return the updated document
    });

    if (!enachDetail) {
      res.status(404).json({ message: "EnachDetail not found" });
      return;
    }

    res.status(200).json({
      message: "EnachDetail updated successfully",
      data: enachDetail,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

// Get all EnachDetails
const getAll = async (req, res) => {
  try {
    const enachDetails = await enachDetailModel.find();
    res.status(200).json({ data: enachDetails });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

// Get a single EnachDetail by ID
const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const enachDetail = await enachDetailModel.findById(id);
    if (!enachDetail) {
      res.status(404).json({ message: "EnachDetail not found" });
      return;
    }

    res.status(200).json({ data: enachDetail });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

// Delete an EnachDetail by ID
const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const enachDetail = await enachDetailModel.findByIdAndDelete(id);
    if (!enachDetail) {
      res.status(404).json({ message: "EnachDetail not found" });
      return;
    }

    res.status(200).json({ message: "EnachDetail deleted successfully" });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

module.exports = {
  create,
  update,
  getAll,
  getById,
  remove,
};
