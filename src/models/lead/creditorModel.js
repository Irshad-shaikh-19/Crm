const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create the schema for Creditors
const CreditorSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    permissions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Permission' }]
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create the Creditors model
const Creditors = mongoose.model('Creditors', CreditorSchema);

module.exports = Creditors;
