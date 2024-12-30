const express = require('express');
const { assignPermissions, createPermission, deletePermission, getPermissionById, listPermission, updatePermission } = require('../controllers/permissionController');

const router = express.Router();

router.post('/create-permission', createPermission);
router.get('/list-permissions', listPermission);
router.get('/permission/:id', getPermissionById);
router.put('/update-permission/:id', updatePermission);
router.delete('/delete-permission/:id', deletePermission);
router.post('/assign-permissions', assignPermissions);

module.exports = router;
