const express = require('express');
const { create, update } = require('../../controllers/lead/mainDetailsController');

const router = express.Router();

// Create MainDetails
router.post('/main-details', create);

// Update MainDetails
router.put('/main-details/:id', update);

module.exports = router;
