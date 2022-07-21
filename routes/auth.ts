import express from "express";
import {
  userSignUp,
  userSignIn,
  refreshToken,
} from "../controllers/authController";

const router = express.Router();

router.post("/signup", userSignUp);
router.post("/signin", userSignIn);
router.post("/refresh", refreshToken);

export default router;
