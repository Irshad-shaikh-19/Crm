// src/controllers/permissionController.js

const Joi = require('joi');
const  Permission  = require('../models/permissionModel');
const BaseService = require('../services/BaseService');
const BaseResponse = require('../utils/BaseResponse');
const permissionSchema = require('../validation/PermissionValidation');
const rolePermisionSchema = require('../validation/RolePermissionValidation');
const  Role  = require('../models/roleModel');

const permissionService = new BaseService(Permission);

exports.createPermission = async (req, res) => {
  const { error } = permissionSchema.validate(req.body);
  if (error) {
    res.status(400).json(BaseResponse.error(error.details[0].message, 400));
    return;
  }

  try {
    const permissionExists = await permissionService.exists(req.body);
    if (permissionExists) {
      res.status(400).json(BaseResponse.error('Permission already exists', 400));
      return;
    }

    const permission = await permissionService.create(req.body);
    res.status(201).json(BaseResponse.success(permission, "Permission created successfully", 201));
  } catch (error) {
    console.log(error);
    res.status(500).json(BaseResponse.error("Failed to create Permission"));
  }
};

exports.listPermission = async (req, res) => {
  try {
    const permission = await permissionService.find(req.query);
    res.json(BaseResponse.success(permission, "Permissions retrieved successfully"));
  } catch (error) {
    res.status(500).json(BaseResponse.error("Failed to retrieve Permissions"));
  }
};

exports.getPermissionById = async (req, res) => {
  try {
    const permission = await permissionService.findById(req.params.id);
    if (!permission) {
      res.status(404).json(BaseResponse.error("Permission not found", 404));
      return;
    }
    res.json(BaseResponse.success(permission, "Permission retrieved successfully"));
  } catch (error) {
    res.status(500).json(BaseResponse.error("Failed to retrieve Permission"));
  }
};

exports.updatePermission = async (req, res) => {
  const { error } = permissionSchema.validate(req.body);
  if (error) {
    res.status(400).json(BaseResponse.error(error.details[0].message, 400));
    return;
  }

  try {
    const permission = await permissionService.update(req.params.id, req.body);
    if (!permission) {
      res.status(404).json(BaseResponse.error("Permission not found", 404));
      return;
    }
    res.json(BaseResponse.success(permission, "Permission updated successfully"));
  } catch (error) {
    res.status(500).json(BaseResponse.error("Failed to update Permission"));
  }
};

exports.deletePermission = async (req, res) => {
  try {
    const permission = await permissionService.delete(req.params.id);
    if (!permission) {
      res.status(404).json(BaseResponse.error("Permission not found", 404));
      return;
    }
    res.json(BaseResponse.success(null, "Permission deleted successfully"));
  } catch (error) {
    res.status(500).json(BaseResponse.error("Failed to delete Permission"));
  }
};

exports.assignPermissions = async (req, res) => {
  try {
    const { error } = rolePermisionSchema.validate(req.body);
    if (error) {
      res.status(400).json(BaseResponse.error(error.details[0].message, 400));
      return;
    }

    const role = await Role.findById(req.body.role_id);
    if (!role) {
      res.status(404).json(BaseResponse.error("Role not found", 404));
      return;
    }

    role.permissions = req.body.permissions;
    await role.save();
    res.json(BaseResponse.success(role, "Permissions assigned successfully"));
  } catch (error) {
    res.status(500).json(BaseResponse.error("Failed to assign Permissions"));
  }
};
