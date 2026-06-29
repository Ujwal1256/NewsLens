require("dotenv").config();

const logger = require("./utils/logger");
const app = require("./app");
const config = require("./config");
const connectDB = require("./database/mongodb");

const startServer = async () => {
  try {
    await connectDB();

    app.listen(config.port, () => {
      logger.info(`🚀 Server running on port ${config.port}`);
    });
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
};

startServer();