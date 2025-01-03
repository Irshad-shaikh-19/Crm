const CustomDocument = require("../../models/lead/customerDocumentModel");
const { createCustomDocumentSchema } = require("../../validation/lead/customerDocumentValidation");
const path = require("path");
const fs = require("fs");

const create = async (req, res) => {
  try {
    const fileFields = ["loanAgreements", "creditFiles", "rentHousingLoans", "wageSlips"];
    const filePaths = {};

    // Populate file paths or set them to an empty array
    fileFields.forEach(field => {
      filePaths[field] = req.files?.[field]?.map(file => file.path) || [];
    });

    // Validate file paths
    const { error } = createCustomDocumentSchema.validate(filePaths);
    if (error) {
      res.status(400).json({ status: 400, message: error.details[0].message });
      return;
    }

    // Create the document entry
    const customDocument = await CustomDocument.create(filePaths);

    res.status(201).json({
      message: "CustomDocument created successfully",
      data: customDocument,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
};


const getAll = async (req, res) => {
  try {
    const customDocuments = await CustomDocument.find();
    res.status(200).json({ message: "Documents retrieved successfully", data: customDocuments });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const customDocument = await CustomDocument.findById(id);

    if (!customDocument) {
      res.status(404).json({ message: "CustomDocument not found" });
      return;
    }

    res.status(200).json({ message: "Document retrieved successfully", data: customDocument });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { loanAgreements, creditFiles, rentHousingLoans, wageSlips } = req.files;

    const customDocument = await CustomDocument.findById(id);
    if (!customDocument) {
      res.status(404).json({ message: "CustomDocument not found" });
      return;
    }

    // Delete old files if new files are uploaded
    const fileFields = { loanAgreements, creditFiles, rentHousingLoans, wageSlips };
    Object.keys(fileFields).forEach(field => {
      if (fileFields[field]) {
        customDocument[field].forEach(filePath => {
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
          }
        });
      }
    });

    // Generate new file paths
    const updatedPaths = {
      loanAgreements: loanAgreements?.map(file => file.path) || customDocument.loanAgreements,
      creditFiles: creditFiles?.map(file => file.path) || customDocument.creditFiles,
      rentHousingLoans: rentHousingLoans?.map(file => file.path) || customDocument.rentHousingLoans,
      wageSlips: wageSlips?.map(file => file.path) || customDocument.wageSlips,
    };

    // Validate new file paths
    const { error } = createCustomDocumentSchema.validate(updatedPaths);
    if (error) {
      res.status(400).json({ status: 400, message: error.details[0].message });
      return;
    }

    // Update the document
    Object.assign(customDocument, updatedPaths);
    await customDocument.save();

    res.status(200).json({ message: "CustomDocument updated successfully", data: customDocument });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedDocument = await CustomDocument.findByIdAndDelete(id);

    if (!deletedDocument) {
      res.status(404).json({ message: "CustomDocument not found" });
      return;
    }

    // Delete associated files from the system
    const filesToDelete = [
      ...deletedDocument.loanAgreements,
      ...deletedDocument.creditFiles,
      ...deletedDocument.rentHousingLoans,
      ...deletedDocument.wageSlips,
    ];

    filesToDelete.forEach(filePath => {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    });

    res.status(200).json({ message: "CustomDocument deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

module.exports = { create, getAll, getOne, update, remove };
