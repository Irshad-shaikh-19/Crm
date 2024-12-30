const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');  // MongoDB connection
const routes = require('./routes/index');  // Centralized routes

dotenv.config();
const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the centralized routes
app.use('/api/v1', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on port ${PORT}`);
});
