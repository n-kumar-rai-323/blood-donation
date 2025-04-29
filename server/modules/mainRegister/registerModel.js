const { Schema, model } = require("mongoose");

const mainRegister = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, required: true, default: false },
    token: String,
  },
  {
    timestamps: true,
  }
);

module.exports = new model("Register", mainRegister);