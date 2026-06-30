const mongoose = require("mongoose");
const config = require("../config");
const logger = require("../utils/logger");

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(config.mongoUri);

    console.log("MongoDB Connected");
    logger.info("MongoDB Connected");
  } catch (error) {
    console.error("DATABASE ERROR:");
    console.error(error);

    throw error;
  }
};

module.exports = connectDB;