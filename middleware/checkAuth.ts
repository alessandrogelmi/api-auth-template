const jwt = require("jsonwebtoken");
import express = require("express");

module.exports = function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const token = req.header("authorization")!.replace("Bearer ", "");
  if (!token) {
    return res.status(401).send({ error: "Access denied" });
  }

  try {
    jwt.verify(token, process.env.TOKEN_KEY);
    next();
  } catch (err) {
    res.status(400).send({ error: "Invalid token" });
  }
};
