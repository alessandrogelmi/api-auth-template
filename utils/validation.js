//USER VALIDATION
const Joi = require("joi");

const userValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required("Email is required"),
    password: Joi.string()
      .min(8, "Password must be 8 char min")
      .required("Password is required"),
  });
  return schema.validate(data);
};

module.exports.userValidation = userValidation;
