const Creditor = require('../../models/lead/creditorDebtDetailModel');
const { createCreditorSchema, updateCreditorSchema } = require('../../validation/lead/creditorDebtDetailValidation');

// Create a new Creditor with tenant handling
const create = async (req, res) => {
  try {
    const { error, value } = createCreditorSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const creditor = await Creditor.create({ ...value, tenantId: req.tenantId });
    res.status(201).json({ message: 'Creditor debt details created successfully', data: creditor });
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
};

// Update a Creditor with tenant handling
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { error, value } = updateCreditorSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const creditor = await Creditor.findOneAndUpdate(
      { _id: id, tenantId: req.tenantId },
      value,
      { new: true }
    );
    if (!creditor) {
      return res.status(404).json({ message: 'Creditor debt details not found' });
    }

    res.status(200).json({ message: 'Creditor debt details updated successfully', data: creditor });
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
};

// Delete a Creditor with tenant handling
const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const creditor = await Creditor.findOneAndDelete({ _id: id, tenantId: req.tenantId });
    if (!creditor) {
      return res.status(404).json({ message: 'Creditor debt details not found' });
    }

    res.status(200).json({ message: 'Creditor debt details deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
};

// Get all Creditors for a specific tenant
const view = async (req, res) => {
  try {
    const creditors = await Creditor.find({ tenantId: req.tenantId });
    res.status(200).json({ message: 'Creditors debt details fetched successfully', data: creditors });
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
};

// Get one Creditor by ID with tenant handling
const getOneById = async (req, res) => {
  try {
    const { id } = req.params;
    const creditor = await Creditor.findOne({ _id: id, tenantId: req.tenantId });
    if (!creditor) {
      return res.status(404).json({ message: 'Creditor debt details not found' });
    }

    res.status(200).json({ message: 'Creditor debt details fetched successfully', data: creditor });
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
};

module.exports = { create, update, remove, view, getOneById };
