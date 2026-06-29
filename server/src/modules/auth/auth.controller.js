const authService = require("./auth.service");
const asyncHandler = require("../../utils/asyncHandler");
const ApiResponse = require("../../utils/ApiResponse");

const HTTP_STATUS = require("../../config/httpStatus");
const MESSAGES = require("../../config/messages");

const register = asyncHandler(async (req, res) => {
  const user = await authService.register(req.body);

  res
    .status(HTTP_STATUS.CREATED)
    .json(
      new ApiResponse(
        true,
        MESSAGES.AUTH.REGISTER_SUCCESS,
        user
      )
    );
});

const login = asyncHandler(async (req, res) => {
  const user = await authService.login(req.body);

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        true,
        MESSAGES.AUTH.LOGIN_SUCCESS,
        user
      )
    );
});

const getProfile = asyncHandler(async (req, res) => {
  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        true,
        MESSAGES.AUTH.PROFILE_FETCHED,
        req.user
      )
    );
});

module.exports = {
  register,
  login,
  getProfile,
};