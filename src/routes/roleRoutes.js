const express = require('express');
const { createRole, deleteRole, getRoleById, listRoles, updateRole } = require('../controllers/roleController');

const router = express.Router();

router.post('/create-role', createRole);
router.get('/list-roles', listRoles);
router.get('/role/:id', getRoleById);
router.put('/update-role/:id', updateRole);
router.delete('/delete-role/:id', deleteRole);

module.exports = router;
