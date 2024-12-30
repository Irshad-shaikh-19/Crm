const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Schema } = mongoose;

// Define the schema for User
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: [{ type: String }],
});

// Pre-save middleware to hash passwords
userSchema.pre('save', async function (next) {
  const user = this;
  
  if (!user.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  next();
});

// Method to compare password for login
userSchema.methods.comparePassword = function (candidatePassword) {
  const user = this;
  return bcrypt.compare(candidatePassword, user.password);
};

// Create the model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
