require("dotenv").config();

const app = require("./app");
const config = require("./config");
const connectDB = require("./database/mongodb");

const startServer = async () => {
  await connectDB();

  app.listen(config.port, () => {
    console.log(`🚀 Server running on port ${config.port}`);
  });
};

startServer();