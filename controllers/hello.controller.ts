import express = require("express");

exports.helloWorld = function (res: express.Response) {
  res.send("Hello World!");
};
