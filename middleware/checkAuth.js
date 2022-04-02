const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  console.log(req.header)
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).send({ error: "Access denied" });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_KEY);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send({ error: "Invalid token" });
  }
};
