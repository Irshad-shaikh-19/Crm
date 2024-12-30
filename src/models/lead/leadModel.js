const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for Lead
const LeadSchema = new Schema({
  mainDetails: { type: mongoose.Schema.Types.ObjectId, ref: "MainDetails" },
  leadDetails: { type: mongoose.Schema.Types.ObjectId, ref: "LeadDetails" },
  websiteDetails: { type: mongoose.Schema.Types.ObjectId, ref: "WebsiteDetails" },
  applicantPersonalDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ApplicantPersonalDetails",
  },
});

// Create the model from the schema
const Lead = mongoose.model("Lead", LeadSchema);

module.exports = Lead;
