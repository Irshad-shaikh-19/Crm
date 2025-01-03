const Joi = require('joi');
const Creditors  = require('../models/lead/creditorModel'); // Adjust path if necessary
const BaseService = require('../services/BaseService');
const BaseResponse = require('../utils/BaseResponse');
const roleSchema = require('../validation/roleValidator'); // Adjust path if necessary

const creditorService = new BaseService(Creditors);

const createCreditor = async (req, res) => {
  const { error } = roleSchema.validate(req.body);

  if (error) {
    res.status(400).json(BaseResponse.error(error.details[0].message, 400));
    return;
  }

  try {
    const creditorExist = await creditorService.exists(req.body);
    if (creditorExist) {
      res.status(400).json(BaseResponse.error('Creditor already exists', 400));
      return;
    }
    const creditor = await creditorService.create(req.body);
    res
      .status(201)
      .json(BaseResponse.success(creditor, 'Creditor created successfully', 201));
  } catch (err) {
    res.status(500).json(BaseResponse.error('Failed to create Creditor'));
  }
};

const listCreditor = async (req, res) => {
  try {
    const creditors = await creditorService.find(req.query);
    res.json(BaseResponse.success(creditors, 'Creditor retrieved successfully'));
  } catch (err) {
    res.status(500).json(BaseResponse.error('Failed to retrieve Creditor'));
  }
};

const getCreditorById = async (req, res) => {
  try {
    const creditor = await creditorService.findById(req.params.id);
    if (!creditor) {
      res.status(404).json(BaseResponse.error('Creditor not found', 404));
      return;
    }
    res.json(BaseResponse.success(creditor, 'Creditor retrieved successfully'));
  } catch (err) {
    res.status(500).json(BaseResponse.error('Failed to retrieve Creditor'));
  }
};

const updateCreditor = async (req, res) => {
  const { error } = roleSchema.validate(req.body);
  if (error) {
    res.status(400).json(BaseResponse.error(error.details[0].message, 400));
    return;
  }

  try {
    const creditor = await creditorService.update(req.params.id, req.body);
    if (!creditor) {
      res.status(404).json(BaseResponse.error('Creditor not found', 404));
      return;
    }
    res.json(BaseResponse.success(creditor, 'Creditor updated successfully'));
  } catch (err) {
    res.status(500).json(BaseResponse.error('Failed to update Creditor'));
  }
};

const deleteCreditor = async (req, res) => {
  try {
    const creditor = await creditorService.delete(req.params.id);
    if (!creditor) {
      res.status(404).json(BaseResponse.error('Creditor not found', 404));
      return;
    }
    res.json(BaseResponse.success(null, 'Creditor deleted successfully'));
  } catch (err) {
    res.status(500).json(BaseResponse.error('Failed to delete Creditor'));
  }
};

module.exports = {
  createCreditor,
  listCreditor,
  getCreditorById,
  updateCreditor,
  deleteCreditor,
};
