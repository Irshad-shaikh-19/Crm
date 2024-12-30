// src/controllers/RoleController.js

const Joi = require('joi');
const { Role } = require('../models/roleModel');
const BaseService = require('../services/BaseService');
const BaseResponse = require('../utils/BaseResponse');
const roleSchema = require('../validation/roleValidator');

const roleService = new BaseService(Role);

// Joi schemas for validation

// Create a new role
exports.createRole = async (req, res) => {
  const { error } = roleSchema.validate(req.body);
  
  if (error) {
    res.status(400).json(BaseResponse.error(error.details[0].message, 400));
    return;
  }

  try {
    const roleExist = await roleService.exists(req.body);
    if (roleExist) {
      res.status(400).json(BaseResponse.error('Role already exists', 400));
      return;
    }
    const role = await roleService.create(req.body);
    res.status(201).json(BaseResponse.success(role, "Role created successfully", 201));
  } catch (error) {
    res.status(500).json(BaseResponse.error("Failed to create role"));
  }
}

// List all roles
exports.listRoles = async (req, res) => {
  try {
    const roles = await roleService.find(req.query);
    res.json(BaseResponse.success(roles, "Roles retrieved successfully"));
  } catch (error) {
    res.status(500).json(BaseResponse.error("Failed to retrieve roles"));
  }
}

// Get a role by ID
exports.getRoleById = async (req, res) => {
  try {
    const role = await roleService.findById(req.params.id);
    if (!role) {
      res.status(404).json(BaseResponse.error("Role not found", 404));
      return;
    }
    res.json(BaseResponse.success(role, "Role retrieved successfully"));
  } catch (error) {
    res.status(500).json(BaseResponse.error("Failed to retrieve role"));
  }
}

// Update a role by ID
exports.updateRole = async (req, res) => {
  const { error } = roleSchema.validate(req.body);
  if (error) {
    res.status(400).json(BaseResponse.error(error.details[0].message, 400));
    return;
  }

  try {
    const role = await roleService.update(req.params.id, req.body);
    if (!role) {
      res.status(404).json(BaseResponse.error("Role not found", 404));
      return;
    }
    res.json(BaseResponse.success(role, "Role updated successfully"));
  } catch (error) {
    res.status(500).json(BaseResponse.error("Failed to update role"));
  }
}

// Delete a role by ID
exports.deleteRole = async (req, res) => {
  try {
    const role = await roleService.delete(req.params.id);
    if (!role) {
      res.status(404).json(BaseResponse.error("Role not found", 404));
      return;
    }
    res.json(BaseResponse.success(null, "Role deleted successfully"));
  } catch (error) {
    res.status(500).json(BaseResponse.error("Failed to delete role"));
  }
}
