//USER VALIDATION
const Joi = require("joi");

const userValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required("Email is required"),
    password: Joi.string().required("Password is required").min(8),
  });

  return schema.validate(data);
};

module.exports.userValidation = userValidation;
