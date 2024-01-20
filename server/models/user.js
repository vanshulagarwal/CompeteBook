const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
  },
  username: {
    type: String,
    required: [true, "Username is Required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: false,
  },
  lc: {
    type: String,
  },
  cf: {
    type: String,
  },
  gfg: {
    type: String,
  },
  hr: {
    //hackerrank
    type: String,
  },
  cc: {
    //codechef
    type: String,
  },
  follower: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  following: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});
module.exports.User = mongoose.model("User", userSchema);
