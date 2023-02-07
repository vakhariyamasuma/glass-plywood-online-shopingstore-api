const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  account_type: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  gender: {
    type: String,
    require: true,
  },
  state_city: {
    type: String,
    require: true,
  },
  mobile_number: {
    type: String,
    require: true,
    unique: true,
  },

  confirm_password: {
    type: String,
    require: true,
  },

  address: {
    type: String,
    require: true,
  },
});

const Register = mongoose.model("users", userSchema);
module.exports = Register;
// // (register,userschema)<=aama Register collection nu nam chhe ane ano 1st leter Capital aavse
// const Register ek class chhhe
