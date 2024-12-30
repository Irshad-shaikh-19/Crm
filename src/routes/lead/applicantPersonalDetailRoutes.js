const express = require('express');
const { create, update } = require('../../controllers/lead/applicantPersonalDetailController');

const router = express.Router();

// Create MainDetails
router.post('/applicant-personal-detail', create);

// Update MainDetails
router.put('/applicant-personal-detail/:id', update);

module.exports = router;
