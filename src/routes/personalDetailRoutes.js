const express = require('express');
const { createLead, getLeads, getLeadById, updateLead, deleteLead } = require('../controllers/personalDetailController');

const router = express.Router();

// Define routes
router.post('/', createLead);            // Create a new lead
router.get('/', getLeads);               // Fetch all leads
router.get('/:id', getLeadById);         // Fetch a single lead by ID
router.put('/:id', updateLead);          // Update a lead by ID
router.delete('/:id', deleteLead);       // Delete a lead by ID

module.exports = router;
