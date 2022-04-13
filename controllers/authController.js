const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { userValidation } = require("../utils/validation");

// @desc    User sign up
// @route   POST /auth/signup
exports.userSignUp = async (req, res, next) => {
  const { error } = userValidation(req.body);
  if (error) {
    return res.status(400).send({ error: error.message });
  }

  //Check is email already exists
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) {
    return res.status(500).send({ error: "Email already exists" });
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    _id: mongoose.Types.ObjectId(),
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const newUser = await user.save();
    res.send(newUser);
  } catch (err) {
    res.send(err);
  }
};

//@ desc    User sign in
//@ route   POST /auth/signin
exports.userSignIn = async (req, res, next) => {
  const { error } = userValidation(req.body);

  if (error) {
    return res.status(400).send({ error: error.message });
  }

  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send({ error: "Email or password is incorrect" });
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).send({ error: "Email or password is incorrect" });
  }

  const token = jwt.sign(
    { _id: user._id, email: user.email },
    process.env.TOKEN_KEY,
    {
      expiresIn: process.env.TOKEN_EXPIRES_IN,
    }
  );

  const refreshToken = jwt.sign(
    { _id: user._id, email: user.email },
    process.env.REFRESH_TOKEN_KEY,
    {
      expiresIn: process.env.REFRESH_EXPIRES_IN,
    }
  );

  res.send({
    token,
    token_expires_in: process.env.TOKEN_EXPIRES_IN,
    refresh_token: refreshToken,
    refresh_token_expires_in: process.env.REFRESH_EXPIRES_IN,
  });
};

// @desc    User refresh token
// @route   POST /auth/refresh
exports.refreshToken = async (req, res, next) => {
  const refresh = req.body.refresh_token;
  if (!refresh) {
    return res.status(400).send({ error: "Refresh token does not exists" });
  }

  const checkRefresh = jwt.verify(refresh, process.env.REFRESH_TOKEN_KEY);
  if (!checkRefresh) {
    return res.status(400).send({ error: "Refresh token is invalid" });
  }

  const token = jwt.sign(
    { _id: checkRefresh._id, email: checkRefresh.email },
    process.env.TOKEN_KEY,
    {
      expiresIn: process.env.TOKEN_EXPIRES_IN,
    }
  );

  const refreshToken = jwt.sign(
    { _id: checkRefresh._id, email: checkRefresh.email },
    process.env.REFRESH_TOKEN_KEY,
    {
      expiresIn: process.env.REFRESH_EXPIRES_IN,
    }
  );

  res.send({
    token,
    token_expires_in: process.env.TOKEN_EXPIRES_IN,
    refresh_token: refreshToken,
    refresh_token_expires_in: process.env.REFRESH_EXPIRES_IN,
  });
};
