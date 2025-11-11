import { User } from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// 🔑 Helper to generate access token
const generateToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    return accessToken;
  } catch (error) {
    throw new ApiError(500, "Something went wrong while generating token");
  }
};

// 🧑‍💼 Register new user
const createUser = asyncHandler(async (req, res) => {
  const { username, email, password, phoneNumber } = req.body;

  // ✅ validate fields
  if ([username, email, password, phoneNumber].some((field) => !field || !field.trim())) {
    throw new ApiError(400, "All fields are required");
  }

  // ✅ check if user already exists
  const existedUser = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with same email or username already exists");
  }

  // ✅ create new user
  const user = await User.create({
    username: username.trim(),
    email: email.trim().toLowerCase(),
    password,
    phoneNumber: phoneNumber.trim(),
  });

  const registeredUser = await User.findById(user._id).select("-password");

  return res
    .status(201)
    .json(new ApiResponse(201, registeredUser, "User created successfully"));
});

// 🔐 Login user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Email and password are required");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const isPasswordCorrect = await user.isPasswordCorrect(password);
  if (!isPasswordCorrect) {
    throw new ApiError(401, "Incorrect password");
  }

  const accessToken = await generateToken(user._id);

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .json(
      new ApiResponse(200, { user, accessToken }, "User logged in successfully")
    );
});

// 🚪 Logout
const logoutUser = asyncHandler(async (req, res) => {
  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .clearCookie("accessToken", options)
    .json(new ApiResponse(200, {}, "User logged out successfully"));
});

// ✏️ Update user details
const updateUserDetails = asyncHandler(async (req, res) => {
  const { username, email, phoneNumber } = req.body;
  const user = req.user;

  if (!username && !email && !phoneNumber) {
    throw new ApiError(400, "At least one field is required to update");
  }

  const updateFields = {};
  if (username) updateFields.username = username.trim();
  if (email) updateFields.email = email.trim().toLowerCase();
  if (phoneNumber) updateFields.phoneNumber = phoneNumber.trim();

  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    { $set: updateFields },
    { new: true }
  ).select("-password");

  if (!updatedUser) {
    throw new ApiError(500, "Something went wrong while updating user");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, updatedUser, "User updated successfully"));
});

// 🔑 Change password
const changePassword = asyncHandler(async (req, res) => {
  const user = req.user;
  const { oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword) {
    throw new ApiError(400, "Old and new passwords are required");
  }

  const loggedInUser = await User.findById(user._id);

  const isPasswordCorrect = await loggedInUser.isPasswordCorrect(oldPassword);
  if (!isPasswordCorrect) {
    throw new ApiError(401, "Your old password is incorrect");
  }

  loggedInUser.password = newPassword;
  await loggedInUser.save();

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password updated successfully"));
});

// 👤 Get current user
const getCurrentUser = asyncHandler(async (req, res) => {
  const user = req.user;
  return res
    .status(200)
    .json(new ApiResponse(200, user, "User fetched successfully"));
});

export {
  createUser,
  loginUser,
  logoutUser,
  updateUserDetails,
  changePassword,
  getCurrentUser,
};
