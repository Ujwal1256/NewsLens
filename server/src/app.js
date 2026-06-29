const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const {limiter} = require("./middleware/rateLimit.middleware");
const errorHandler = require("./middleware/error.middleware");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
const compression = require("compression");


const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
const routes = require("./routes");


app.disable("x-powered-by");
app.set("trust proxy", 1);
app.use(helmet());
app.use(cors());
app.use(compression());
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(limiter);
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "NewsLens API is running 🚀",
  });
});

app.use("/api/v1", routes);

app.use(errorHandler);

module.exports = app;
