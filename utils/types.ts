import mongoose = require("mongoose");

export interface IUser extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  email: string;
  password: string;
}

export interface TokenInterface {
  _id: string;
  email: string;
}
