const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for Role
const RoleSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    permissions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Permission' }]
  },
  {
    timestamps: true // Automatically adds createdAt and updatedAt fields
  }
);

// Create the model from the schema
const Role = mongoose.model('Role', RoleSchema);

module.exports = Role;
