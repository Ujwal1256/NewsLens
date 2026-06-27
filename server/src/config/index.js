
const requiredEnvVars = [
  "PORT",
  // "JWT_SECRET",
  "GNEWS_API_KEY",
];

requiredEnvVars.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
});

module.exports = {
  port: process.env.PORT,
  // jwtSecret: process.env.JWT_SECRET,
  gnewsApiKey: process.env.GNEWS_API_KEY,
  // mongoUri: process.env.MONGODB_URI,
};