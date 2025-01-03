const express = require('express');
const { create, update, remove, view, getOneById } = require('../../controllers/lead/creditorDebtDetailController');
const tenantMiddleware = require('../../middleware/tenantMiddleware');

const router = express.Router();

// Create a Creditor with tenant middleware
router.post('/creditor-debt', tenantMiddleware, create);

// Update a Creditor with tenant middleware
router.put('/creditor-debt/:id', tenantMiddleware, update);

// Delete a Creditor with tenant middleware
router.delete('/creditor-debt/:id', tenantMiddleware, remove);

// View all Creditors with tenant middleware
router.get('/creditor-debt', tenantMiddleware, view);

// Get one Creditor by ID with tenant middleware
router.get('/creditor-debt/:id', tenantMiddleware, getOneById);

module.exports = router;
