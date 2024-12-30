const express = require('express');
const { create, update } = require('../../controllers/lead/websiteDetailController');

const router = express.Router();

// Create WebsiteDetails
router.post('/website-details', create);

// Update WebsiteDetails
router.put('/website-details/:id', update);

module.exports = router;
