const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for Permission
const PermissionSchema = new Schema({
  name: { type: String, required: true, unique: true }
});

// Create the model from the schema
const Permission = mongoose.model('Permission', PermissionSchema);

module.exports = Permission;
