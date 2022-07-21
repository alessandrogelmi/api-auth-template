import { Schema, model } from "mongoose";
import { IUser } from "../utils/types";

const userSchema = new Schema<IUser>({
  _id: Schema.Types.ObjectId,
  email: {
    type: String,
    required: true,
  },
  password: { type: String, required: true },
});

const User = model<IUser>("User", userSchema);

export default User;
