const mongoose = require("mongoose");
const User = require("../models/User");
const { userValidation } = require("../utils/validation");

// @desc    User sign up
// @route   POST /auth/register
exports.userSignUp = async (req, res, next) => {
  const { error } = userValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  //Check is email already exists
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) {
    return res.status(500).send({ error: "Email already exists" });
  }

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
