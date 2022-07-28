import express = require("express");

exports.helloWorld = function (req: express.Request, res: express.Response) {
  return res.status(200).send("Hello World!");
};
