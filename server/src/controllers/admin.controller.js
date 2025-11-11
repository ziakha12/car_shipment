import { User } from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// 🔹 Helper to generate token
const generateToken = async (userId) => {
  const user = await User.findById(userId);
  return user.generateAccessToken();
};

// ✅ REGISTER USER
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, phone, whatsapp, website } = req.body;

  if (!firstName || !lastName || !email || !password) {
    throw new ApiError(400, "First name, last name, email, and password are required");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new ApiError(409, "User already exists with this email");

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    phone,
    whatsapp,
    website,
  });

  const createdUser = await User.findById(user._id).select("-password");

  res.status(201).json(new ApiResponse(201, createdUser, "User registered successfully"));
});

// ✅ LOGIN USER
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) throw new ApiError(400, "Email and password are required");

  const user = await User.findOne({ email });
  if (!user) throw new ApiError(404, "User not found");

  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) throw new ApiError(401, "Invalid credentials");

  const token = await generateToken(user._id);

  res
    .cookie("accessToken", token, { httpOnly: true, secure: true })
    .json(new ApiResponse(200, { user, token }, "Login successful"));
});

// ✅ UPDATE PROFILE (with file uploads)
const updateUserProfile = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const {
    firstName,
    lastName,
    phone,
    whatsapp,
    website,
    friendlyAddress,
    description,
    latitude,
    longitude,
    address,
  } = req.body;

  const updateData = {
    firstName,
    lastName,
    phone,
    whatsapp,
    website,
    friendlyAddress,
    description,
    location: {
      latitude,
      longitude,
      address,
    },
  };

  // ✅ Handle avatar file
  if (req.files?.avatar && req.files.avatar[0]) {
    updateData.avatar = req.files.avatar[0].path;
  }

  // ✅ Handle multiple photos
  if (req.files?.photos) {
    updateData.photos = req.files.photos.map((file) => file.path);
  }

  const updatedUser = await User.findByIdAndUpdate(userId, { $set: updateData }, { new: true }).select("-password");

  if (!updatedUser) throw new ApiError(404, "User not found");

  res.status(200).json(new ApiResponse(200, updatedUser, "Profile updated successfully"));
});

// ✅ CHANGE PASSWORD
const changePassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword)
    throw new ApiError(400, "Both old and new passwords are required");

  const user = await User.findById(req.user._id);
  if (!user) throw new ApiError(404, "User not found");

  const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);
  if (!isPasswordCorrect) throw new ApiError(400, "Old password is incorrect");

  user.password = newPassword;
  await user.save();

  res.status(200).json(new ApiResponse(200, {}, "Password changed successfully"));
});

// ✅ LOGOUT
const logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie("accessToken").json(new ApiResponse(200, {}, "Logout successful"));
});

// ✅ GET CURRENT USER
const getCurrentUser = asyncHandler(async (req, res) => {
  res.status(200).json(new ApiResponse(200, req.user, "User fetched successfully"));
});

export {
  registerUser,
  loginUser,
  updateUserProfile,
  changePassword,
  logoutUser,
  getCurrentUser,
};
