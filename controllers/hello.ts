import express = require("express");

exports.helloWorld = function (req: express.Request, res: express.Response) {
  res.send("Hello World!");
};
