import mongoose = require("mongoose");

interface IUser extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema<IUser>({
  _id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    required: true,
  },
  password: { type: String, required: true },
});

module.exports = mongoose.model<IUser>("User", userSchema);
