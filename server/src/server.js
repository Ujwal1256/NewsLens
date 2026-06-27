require("dotenv").config();
const app = require("./app");

const config = require("./config/index");

app.listen(config.port, () => {
  console.log(`🚀 Server running on ${config.port}`);
});