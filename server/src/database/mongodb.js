const mongoose = require("mongoose");
const config = require("../config");
const logger = require("../utils/logger");

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoUri);
    logger.info("MongoDB Connected");
  } catch (error) {
    console.error("DATABASE ERROR:");
    console.error(error);

    throw error;
  }
};

module.exports = connectDB;