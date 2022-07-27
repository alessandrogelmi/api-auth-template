const authRouter = require("express").Router();
const {
  userSignUp,
  userSignIn,
  refreshToken,
} = require("../controllers/authController");

authRouter.post("/signup", userSignUp);
authRouter.post("/signin", userSignIn);
authRouter.post("/refresh", refreshToken);

module.exports = authRouter;
