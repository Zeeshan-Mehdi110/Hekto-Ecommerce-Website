const moment = require("moment/moment");
const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [false, "Name is required"],
    maxlength: 250
  },
  email: {
    type: String,
    required: [true, "Email must be unique"],
    unique: true,
    validate : {
      validator : function (v) {
        return v.length <=30;
      },
      message : "the email must be less than 30 characters long!"
    }
  },
  phone_number: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return v.length <= 20;
      },
      message: 'The phone number should be at most 20 characters long!'
    }
  }
  ,
  profile_picture: {
    type: String,
    maxlength: 100,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    maxlength : 300
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
    type: Number,
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
})
userSchema.set('toJSON', {
  getters: true,
  transform: (doc, ret, options) => {
    ret.created_on = moment(ret.created_on).format('YYYY-MM-DD');
    ret.modified_on = moment(ret.modified_on).format('YYYY-MM-DD');
    return ret;
  }
});
const User = mongoose.model("users", userSchema);

module.exports = User;
