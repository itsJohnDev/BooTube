const mongoose = require("mongoose");
const appConfig = require("./index");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(appConfig.mongoURI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
