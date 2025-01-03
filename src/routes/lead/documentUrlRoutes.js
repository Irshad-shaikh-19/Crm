const express = require('express');
const { create, update, remove, view, getOneById } = require('../../controllers/lead/documentUrlController');

const router = express.Router();

// Create a DocumentUrl
router.post('/document-url', create);

// Update a DocumentUrl
router.put('/document-url/:id', update);

// Delete a DocumentUrl
router.delete('/document-url/:id', remove);

// View all DocumentUrls
router.get('/document-url', view);

// Get one DocumentUrl by ID
router.get('/document-url/:id', getOneById);

module.exports = router;
