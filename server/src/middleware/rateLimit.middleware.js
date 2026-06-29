const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 

  max: 100,

  message: {
    success: false,
    message: "Too many requests. Please try again after 15 minutes.",
  },

  standardHeaders: true,
  legacyHeaders: false,
});



const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    message: "Too many login attempts. Please try again later.",
  },
});

module.exports = {
  limiter,
  authLimiter,
};