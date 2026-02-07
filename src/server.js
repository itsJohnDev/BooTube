require("dotenv").config(); // Load env

const express = require("express");
const connectDB = require("./config/db");

// Express Init
const app = express();

// ConnectDB
connectDB();

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}...`);
});
