const express = require('express');
const { registerUser, loginUser } = require('../controllers/index');

const router = express.Router();

// Define the routes for user registration and login
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
