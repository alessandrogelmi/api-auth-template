import { Schema } from "mongoose";

export interface IUser {
  _id: Schema.Types.ObjectId;
  email: string;
  password: string;
}

export interface TokenInterface {
  _id: string;
  email: string;
}
