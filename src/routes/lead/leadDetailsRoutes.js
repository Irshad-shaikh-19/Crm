const express = require('express');
const { create, update } = require('../../controllers/lead/leadDetailController');

const router = express.Router();

// Create MainDetails
router.post('/lead-details', create);

// Update MainDetails
router.put('/lead-details/:id', update);

module.exports = router;
