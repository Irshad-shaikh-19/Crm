// src/exports.js

// Controllers
module.exports = {
  ...require('../controllers/authController'),
};

// Models
module.exports.User = require('../models/userModel'); 

// Routes
module.exports.authRoutes = require('../routes/authRoutes'); 
