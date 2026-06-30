require("dotenv").config();

const logger = require("./utils/logger");
const app = require("./app");
const config = require("./config");
const connectDB = require("./database/mongodb");

const startServer = async () => {
  try {
    console.log("PORT:", process.env.PORT);
    console.log("MONGODB_URI exists:", !!process.env.MONGODB_URI);
    console.log("JWT_SECRET exists:", !!process.env.JWT_SECRET);
    console.log("GNEWS_API_KEY exists:", !!process.env.GNEWS_API_KEY);

    await connectDB();

    app.listen(config.port, "0.0.0.0", () => {
      console.log(`Server started on ${config.port}`);
      logger.info(`Server running on port ${config.port}`);
    });
  } catch (err) {
    console.error("STARTUP ERROR:");
    console.error(err);
    process.exit(1);
  }
};

startServer();