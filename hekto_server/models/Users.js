const moment = require("moment/moment");
const mongoose = require("mongoose");

const User = mongoose.model("users", {
  name: {
    type: String,
    required: [true, "Name is required"],
    maxlength: 250
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    maxlength: 250
  },
  phone_number: {
    type: String,
    maxlength: 20
  },
  profile_picture: {
    type: String,
    maxlength: 100
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    maxlength: 300
  },
  password_reset_code: {
    type: String,
    maxlength: 100
  },
  email_verification_code: {
    type: String,
    maxlength: 100
  },
  type: {
    type: Boolean,
    default: process.env.USER_TYPE_SUPERADMIN,
    required: [true, "User type is required"],
  },
  active: {
    type: Boolean,
    default: process.env.ACTIVE_STATUS
  },
  created_on: {
    type: Date,
    default: moment().format('YYYY-MM-DD')
  },
  modified_on: {
    type: Date,
    default: moment().format('YYYY-MM-DD')
  },
});

module.exports = User;
