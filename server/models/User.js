import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true, // Allows null values while maintaining uniqueness for non-null values
  },
  cartItems: {
    type: Object,
    default: {},
  },
},{minimize: false});

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;