import { Schema, model } from "mongoose";

interface IUser {
  _id: Schema.Types.ObjectId;
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  _id: Schema.Types.ObjectId,
  email: {
    type: String,
    required: true,
  },
  password: { type: String, required: true },
});

module.exports = model<IUser>("User", userSchema);
