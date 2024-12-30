const express = require('express');
const { createCreditor, deleteCreditor, getCreditorById, listCreditor, updateCreditor } = require('../controllers/creditorController');

const router = express.Router();

router.post('/create-creditor', createCreditor);
router.get('/list-creditors', listCreditor);
router.get('/creditor/:id', getCreditorById);
router.put('/update-creditor/:id', updateCreditor);
router.delete('/delete-creditor/:id', deleteCreditor);

module.exports = router;
