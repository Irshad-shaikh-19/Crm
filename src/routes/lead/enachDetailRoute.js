const express = require('express');
const { create, update, getAll, getById, remove,} = require('../../controllers/lead/enachDetailController'); 

const router = express.Router();

// Create a new EnachDetail
router.post('/enach-details', create);

// Update an existing EnachDetail by ID
router.put('/enach-details/:id', update);

// Get all EnachDetails
router.get('/enach-details', getAll);

// Get a specific EnachDetail by ID
router.get('/enach-details/:id', getById);

// Delete an EnachDetail by ID
router.delete('/enach-details/:id', remove);

module.exports = router;
