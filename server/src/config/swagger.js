const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "NewsLens API",
      version: "1.0.0",
      description: "Backend API documentation for NewsLens",
    },

    servers: [
      {
        url: process.env.BASE_URL
          ? `${process.env.BASE_URL}/api/v1`
          : "http://localhost:5000/api/v1",
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },

    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: ["./src/modules/**/*.routes.js"],
};

module.exports = swaggerJsdoc(options);
