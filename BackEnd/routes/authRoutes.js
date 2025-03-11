import express from "express";
import {
  isAuthenticated,
  login,
  logout,
  register,
  resetpassword,
  sendResetOtp,
  sendVerifyOTP,
  verifyEmail,
} from "../controllers/authController.js";
import userAuth from "../Middleware/userAuth.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/send-verify-otp", userAuth, sendVerifyOTP);
authRouter.post("/verify-account", userAuth, verifyEmail);
authRouter.get("/is-auth", userAuth, isAuthenticated);
authRouter.post("/send-rest-otp", sendResetOtp);
authRouter.post("/reset-password", resetpassword);

export default authRouter;
