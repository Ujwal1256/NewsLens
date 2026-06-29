const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const config = require("../../config");
const User = require("../../models/user.model");
const ApiError = require("../../utils/ApiError");

const {
  BCRYPT_SALT_ROUNDS,
  JWT_EXPIRES_IN,
} = require("../../config/constants");

const HTTP_STATUS = require("../../config/httpStatus");
const MESSAGES = require("../../config/messages");

const register = async ({ name, email, password }) => {
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new ApiError(
      HTTP_STATUS.CONFLICT,
      MESSAGES.AUTH.USER_EXISTS
    );
  }

  const hashedPassword = await bcrypt.hash(
    password,
    BCRYPT_SALT_ROUNDS
  );

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return {
    id: user._id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
  };
};

const login = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(
      HTTP_STATUS.UNAUTHORIZED,
      MESSAGES.AUTH.INVALID_CREDENTIALS
    );
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new ApiError(
      HTTP_STATUS.UNAUTHORIZED,
      MESSAGES.AUTH.INVALID_CREDENTIALS
    );
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    config.jwtSecret,
    {
      expiresIn: JWT_EXPIRES_IN,
    }
  );

  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  };
};

module.exports = {
  register,
  login,
};