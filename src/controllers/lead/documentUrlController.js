const DocumentUrl = require('../../models/lead/documentUrlModel');
const { createDocumentUrlSchema, updateDocumentUrlSchema } = require('../../validation/lead/documentUrlValidation');

// Create a new DocumentUrl
const create = async (req, res) => {
  try {
    const { error, value } = createDocumentUrlSchema.validate(req.body);
    if (error) {
      const cleanMessage = error.details[0].message.replace(/[^a-zA-Z0-9 ]/g, '').trim();
      res.status(400).json({ status: 400, message: cleanMessage });
      return;
    }

    const documentUrl = await DocumentUrl.create(value);
    res.status(201).json({ message: 'DocumentUrl created successfully', data: documentUrl });
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
};

// Update a DocumentUrl
const update = async (req, res) => {
  try {
    const { id } = req.params;

    const { error, value } = updateDocumentUrlSchema.validate(req.body);
    if (error) {
      res.status(400).json({ message: error.details[0].message });
      return;
    }

    const documentUrl = await DocumentUrl.findByIdAndUpdate(id, value, { new: true });
    if (!documentUrl) {
      res.status(404).json({ message: 'DocumentUrl not found' });
      return;
    }

    res.status(200).json({ message: 'DocumentUrl updated successfully', data: documentUrl });
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
};

// Delete a DocumentUrl
const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const documentUrl = await DocumentUrl.findByIdAndDelete(id);
    if (!documentUrl) {
      res.status(404).json({ message: 'DocumentUrl not found' });
      return;
    }

    res.status(200).json({ message: 'DocumentUrl deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
};

// View all DocumentUrls
const view = async (req, res) => {
  try {
    const documentUrls = await DocumentUrl.find();
    res.status(200).json({ message: 'DocumentUrls fetched successfully', data: documentUrls });
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
};

// Get one DocumentUrl by ID
const getOneById = async (req, res) => {
  try {
    const { id } = req.params;

    const documentUrl = await DocumentUrl.findById(id);
    if (!documentUrl) {
      res.status(404).json({ message: 'DocumentUrl not found' });
      return;
    }

    res.status(200).json({ message: 'DocumentUrl fetched successfully', data: documentUrl });
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
};

module.exports = { create, update, remove, view, getOneById };
