require("dotenv").config();

const logger = require("./utils/logger");
const app = require("./app");
const config = require("./config");
const connectDB = require("./database/mongodb");

const startServer = async () => {
  try {
    console.log("Before connectDB");

    await connectDB();

    console.log("After connectDB");

    app.listen(config.port, "0.0.0.0", () => {
      console.log("Listening...");
    });
  } catch (err) {
    console.error("STARTUP ERROR:");
    console.error(err);
    process.exit(1);
  }
};

startServer();
