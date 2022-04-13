const router = require("express").Router();
const {
  userSignUp,
  userSignIn,
  refreshToken,
} = require("../controllers/authController");

router.post("/signup", userSignUp);
router.post("/signin", userSignIn);
router.post("/refresh", refreshToken);

module.exports = router;
